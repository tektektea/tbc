<?php

namespace App\Jobs;

use App\Models\Media;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class MediaThumbnailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @param Media $media
     */
    public function __construct(protected Media $media)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

            $path = Storage::path('public/'.$this->media->path);
            $img = Image::make($path)->resize(300, 185, function ($constraint) {
                $constraint->aspectRatio();
            });

            $fileName='thumbnails/'.Str::uuid().$this->media->original_name;

            Storage::disk('public')->put($fileName,  (string) $img->encode());
            $this->media->update(['thumbnail' =>$fileName ]);


    }
}
