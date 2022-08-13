<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'slug'=> $this->faker->slug,
            'category' => $this->faker->word,
            'video_url' => 'https://www.youtube.com/watch?v='.$this->faker->word,
            'thumbnail' => $this->faker->imageUrl(),
            'is_featured' => $this->faker->boolean,
            'rating' => $this->faker->randomFloat(2, 0, 10),
        ];
    }
}
