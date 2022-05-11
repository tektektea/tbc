<?php

namespace Database\Seeders;

use App\Models\WebResource;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WebResourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WebResource::query()->upsert([
            ['type'=>'privacy','content'=>'NA'],
            ['type'=>'term','content'=>'NA'],
            ['type'=>'about','content'=>'NA'],
            ['type'=>'contact','content'=>'NA'],
        ], 'type');
    }
}
