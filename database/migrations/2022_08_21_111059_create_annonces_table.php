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
        Schema::create('annonces', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->integer('type_logement_id');
            $table->text('address');
            $table->text('compAddress')->nullable();
            $table->String('city');
            $table->String('postalCode');
            $table->String('country');
            $table->String('surface');
            $table->String('numberOfBeds');
            $table->String('capacity');
            $table->String('price');
            $table->text('description');
            $table->json('optionsLogement');
            $table->json('servicesLogement');
            $table->String('animaux');
            $table->text('informationsSupp');
            $table->json('suppPropretiesAnnonce');

            // $table->foreignId('user_id')->constrained()->onDelete('cascade')->onUpdate('cascade');

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
        Schema::dropIfExists('annonces');
    }
};
