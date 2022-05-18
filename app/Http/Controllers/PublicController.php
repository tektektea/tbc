<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Setting;
use App\Models\Testimony;
use App\Models\Vehicle;
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
        $settingData = Setting::query()->first();
        return [
            'header_text' => json_decode($settingData->content, true)['header_text'],
            'feature_text' => json_decode($settingData->content, true)['feature_text'],
            'recent_events' => Event::query()->latest()->take(6)->get(),
            'testimonials' => Testimony::query()->get(),
            'fav_cars' => Vehicle::query()->where('decorated', 1)->get(),
        ];
    }

    public function cta(Request $request)
    {
        return [
            'list'=>[
                ['head'=>'I dam em? ','caption'=>'Sawrkar approved ngei mai kan ni e','icon'=>'military_tech'],
                ['head'=>'I dam em? ','caption'=>'Sawrkar approved ngei mai kan ni e','icon'=>'military_tech'],
                ['head'=>'I dam em? ','caption'=>'Sawrkar approved ngei mai kan ni e','icon'=>'military_tech'],
                ['head'=>'I dam em? ','caption'=>'Sawrkar approved ngei mai kan ni e','icon'=>'military_tech'],
            ]
        ];
    }
    public function faq(Request $request)
    {
        return [
            'list'=>[
                ['question'=>'I dam em? ','answer'=>'Dam e'],
                ['question'=>'I dam em? ','answer'=>'Dam e'],
            ]
        ];
    }
}
