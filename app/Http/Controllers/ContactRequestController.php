<?php

namespace App\Http\Controllers;

use App\Models\ContactRequest;
use Illuminate\Http\Request;

class ContactRequestController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('search');
        return [
            'list' => ContactRequest::query()
                ->when($search, fn($q) => $q->where('name', 'LIKE', "%$search")
                    ->orWhere('mobile', 'LIKE', "%$search"))
                ->paginate()
        ];
    }

    public function destroy(Request $request,ContactRequest $model)
    {
        $model->delete();
        return [
            'message' => 'Content deleted successfully'
        ];
    }

    public function store(Request $request)
    {
        $validatedData=$this->validate($request, [
            'name' => 'required',
            'mobile' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);
        ContactRequest::query()->create($validatedData);
        return [
            'message' => 'Your request submitted successfully'
        ];

    }
}
