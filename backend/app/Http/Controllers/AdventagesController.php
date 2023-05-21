<?php

namespace App\Http\Controllers;

use App\Models\Advantages;
use App\Http\Resources\AdventagesResource;
use App\Http\Requests\AdvantagesRequest;
use Illuminate\Http\Request;


class AdventagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AdventagesResource::collection(Advantages::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AdvantagesRequest $request)
    {
        $new_entry = Advantages::create($request->validated());
        return new AdventagesResource($new_entry);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new AdventagesResource(Advantages::findOrFail($id));
    }

    /*
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function update(AdvantagesRequest $request, $id)
   {
        $entry = Advantages::find($id);
        $entry->update($request->all());
        return new AdventagesResource($entry);
   }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Advantages::destroy($id);
        return 'Запись успешно удалена!';
    }
}
