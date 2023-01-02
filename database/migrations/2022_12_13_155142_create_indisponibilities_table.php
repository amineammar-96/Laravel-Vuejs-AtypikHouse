<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('indisponibilities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('annonce_id');
            $table->integer('owner_id');
            $table->date('dateFrom');
            $table->date('dateTo');
            $table->text('motif');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('indisponibilities');
    }
};
