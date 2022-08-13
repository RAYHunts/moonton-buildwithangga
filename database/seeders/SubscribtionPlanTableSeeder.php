<?php

namespace Database\Seeders;

use App\Models\SubscribtionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscribtionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subcriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'features' => json_encode(['Unlock 10 basic movies','Up to 3 users', 'Support 24/7 ready'])
            ],
            [
                'name' => 'Premium',
                'price' => 399000,
                'active_period_in_months' => 6,
                'features' => json_encode(['Unlock 10 premium movies','Up to 5 users', 'Support 24/7 ready'])
            ],
            [
                'name' => 'Ultimate',
                'price' => 499000,
                'active_period_in_months' => 12,
                'features' => json_encode(['Unlock 10 ultimate movies','Up to 10 users', 'Support 24/7 ready'])
            ],
        ];

        foreach ($subcriptionPlan as $key => $value) {
            SubscribtionPlan::create($value);
        }
    }
}
