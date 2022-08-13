<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'subscribtion_plan_id',
        'expired_at',
        'payment_status',
        'snapToken',
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function subscribtionPlan() : BelongsTo
    {
        return $this->belongsTo(SubscribtionPlan::class);
    }
}
