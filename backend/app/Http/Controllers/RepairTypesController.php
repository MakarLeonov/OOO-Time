<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RepairTypes;
use App\Http\Resources\RepairTypeResource;
use App\Http\Requests\RepairTypeRequest;

class RepairTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return RepairTypeResource::collection(RepairTypes::with('service')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RepairTypeRequest $request)
    {
        $new_entry = RepairTypes::create($request->validated());
        return new RepairTypeResource($new_entry);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new RepairTypeResource(RepairTypes::with('service')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RepairTypeRequest $request, string $id)
    {
        $entry = RepairTypes::findOrFail($id);
        $entry->update($request->validated());
        return new RepairTypeResource($entry);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        RepairTypes::destroy($id);
        return 'Запись успешно удалена!';
    }
}
