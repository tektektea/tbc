<?php

namespace App\Http\Controllers;

use App\Models\WebResource;
use Illuminate\Http\Request;

class WebResourceController extends Controller
{
    public function getTerm(Request $request)
    {
        $web=WebResource::query()->where('type', 'term')
            ->first();
        return [
            'data'=>$web
        ];
    }
    public function getAbout(Request $request)
    {
        $web=WebResource::query()->where('type', 'about')
            ->first();
        return [
            'data'=>$web
        ];
    }

    public function getContact(Request $request)
    {
        $web=WebResource::query()->where('type', 'contact')
            ->first();
        return [
            'data'=>$web
        ];
    }

    public function getPrivacy(Request $request)
    {
        $web=WebResource::query()->where('type', 'privacy')
            ->first();
        return [
            'data'=>$web
        ];
    }
    public function update(Request $request,WebResource $model)
    {
        $this->validate($request, [
            'content', 'required'
        ]);
        $model->update([
            'content' => $request->get('content')
        ]);
        return [
            'data'=>$model
        ];
    }

}
