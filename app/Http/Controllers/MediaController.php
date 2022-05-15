<?php

namespace App\Http\Controllers;

use App\Jobs\MediaThumbnailJob;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function __construct(protected Media $media)
    {
    }

    public function index(Request $request)
    {
        return [
            'list' => Media::query()->paginate()
        ];
    }
    public function gallery(Request $request)
    {
        return [
            'list' => Media::query()->where('gallery_image',true)->paginate()
        ];
    }
    public function upload(Request $request)
    {
        $this->validate($request, [
            'attachment' => 'image|max:5120',
            'gallery_image'=>'required'
        ]);
        $file = $request->file('attachment');
        $path=Storage::disk('public')->put('media',$file);
        $model=Media::query()->create([
            'path'=>$path,
            'extension' => $file->getClientOriginalExtension(),
            'original_name' => $file->getClientOriginalName(),
            'mime'=>$file->getMimeType(),
            'gallery_image'=>(boolean)$request->get('gallery_image')
        ]);
        MediaThumbnailJob::dispatch($model);
        return [
            'message' => 'Image uploaded successfully'
        ];
    }

    public function all(Request $request)
    {
        return [
            'list'=>Media::query()->get(),
        ];
    }

    public function removeGallery(Request $request,Media $model)
    {
        return [
            'data'=>$model->update(['gallery_image'=>false]),
            'message'=>'Image removed from Gallery'
        ];
    }

    public function destroy(Request $request,Media $model)
    {
        $existMedia=Storage::disk('public')->exists($model->path);
        $existThumbnail=!blank($model?->thumbnail)?Storage::disk('public')->exists($model->thumbnail):false;

        if ($existMedia) {
            Storage::disk('public')->delete($model->path);
        }

        if ($existThumbnail) {
            Storage::disk('public')->delete($model->thumbnail);
        }
        $model->delete();

        return [
            'message'=>'Media deleted successfully'
        ];
    }

}
