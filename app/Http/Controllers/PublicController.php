<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Testimony;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function recentEvents(Request $request)
    {
        return [
            'list' => Event::query()->latest()->take(5)->get()
        ];
    }
    public function events(Request $request)
    {
        $search = $request->get('search');
        return [
            'list' => Event::query()->when($search,fn($q)=>$q->where('name','LIKE',"%$search"))->paginate()
        ];
    }
    public function event(Request $request,Event $model)
    {
        return [
            'data' => $model
        ];
    }
    public function testimonials(Request $request)
    {
        return [
            'list' => Testimony::query()->latest()->get()
        ];
    }

    public function getPublicData(Request $request)
    {
        return [
            'recent_events' => Event::query()->latest()->take(6)->get(),
            'testimonials' => Testimony::query()->get(),
        ];
    }
}
