<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('search');
        return [
            'list' => Event::query()->when($search, fn($q) => $q->where('title', 'LIKE', "%$search")->where('description', 'LIKE', "%$search"))
                ->paginate()
        ];
    }

    public function show(Request $request, Event $model)
    {
        return [
            'data' => $model
        ];
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required'
        ]);
       $model= Event::query()->create($request->only((new Event())->getFillable()));
        return [
            'data' => $model,
            'message' => 'Event saved successfully'
        ];
    }

    public function update(Request $request, Event $model)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required'
        ]);
        $model->update($request->only((new Event())->getFillable()));
        return [
            'data' => $model,
            'message' => 'Event updated successfully'
        ];
    }

    public function destroy(Request $request, Event $model)
    {
        $model->delete();
        return [
            'message'=>'Event deleted successfully'
        ];
    }
}
