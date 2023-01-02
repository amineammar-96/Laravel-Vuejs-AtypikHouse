<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title></title>

	@vite('resources/css/app.css')
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}"> --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

</head>
<body>
	<div id="app"></div>
	@vite('resources/js/app.js')

    {{-- <script type="module" src="/resources/js/client-side.js"></script> --}}
    {{-- <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-paypal-checkout@2.0.0/dist/vue-paypal-checkout.min.js"></script> --}}
    <script src="https://www.paypal.com/sdk/js?client-id=ATIe_zQwu7Z6muEj6cW98HpmMmCyUVaooKL1RSzlI23XdnraljB_z4ZgfqYz7a_uKwMr_E0TBWbKrV0K"></script>
    <script src="https://unpkg.com/@paypal/paypal-js@5.1.4/dist/iife/paypal-js.min.js"></script>

</body>
</html>
