@extends('layouts.app')
@section('page-title','sezione-show')
@section('content')
<div class="text-center">

    <h3>Titolo</h3>
    <h1>{{$show->title}}</h1>

    <h3>descrizione</h3>
    <h1>{{$show->body}}</h1>

    <h3>immagine</h3>
    <img src="{{asset("storage/$show->cover")}}" alt="">
</div>
@endsection
