<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $content = json_encode([
            'header_text'=>'TBC CAR RENTAL',
            'feature_text'=>"I hahdam nan leh i him zawk nan Gov't Approved Car rental service ngei pan thin ang che",
            'enable_booking'=>false,
        ]);
        Setting::query()->upsert([
            ['id'=>1,'content'=>$content]
        ], 'id');
    }
}
