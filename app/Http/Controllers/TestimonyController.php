<?php

namespace App\Http\Controllers;

use App\Models\Testimony;
use Illuminate\Http\Request;

class TestimonyController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('search');
        return [
            'list' => Testimony::query()->when($search, fn($q) => $q->where('name', 'LIKE', "%$search"))
                ->paginate(),
        ];
    }

    public function show(Request $request,Testimony $model)
    {
        return [
            'data' => $model,
        ];
    }

    public function store(Request $request)
    {
        $validatedData=$this->validate($request, [
            'name'=>'required',
            'quote'=>'required',
        ]);
       $data= Testimony::query()->create($request->only((new Testimony())->getFillable()));
        return [
            'data'=>$data,
            'message'=>'Testimony saved successfully'
        ];
    }

    public function update(Request $request,Testimony $model)
    {
        $validatedData=$this->validate($request, [
            'name'=>'required',
            'quote'=>'required',
        ]);
        $data= $model->update($request->only((new Testimony())->getFillable()));
        return [
            'data'=>$data,
            'message'=>'Testimony updated successfully'
        ];
    }

    public function destroy(Request $request,Testimony $model)
    {
        $model->delete();
        return [
            'message' =>'Testimony deleted successfully'
        ];
    }
}
