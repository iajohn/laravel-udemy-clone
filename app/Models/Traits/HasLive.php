<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;

trait HasLive
{
    public function scopeLive(Builder $builder)
    {
        return $builder->where('live', true);
    }
}