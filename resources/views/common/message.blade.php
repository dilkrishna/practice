@if (count($errors) > 0)
    <div class="alert alert-danger">
        <button aria-hidden="true" data-dismiss="alert" class="close" type="button">&chi;</button>
        <ul class="list list-group">
            @foreach ($errors->all() as $error)
                <li class="error text text-white text-bold" style="list-style:none;"><i class="fa fa-times"></i> Error: {{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

@if (session('success'))
    <div class="alert alert-info alert-dismissable">
        <button aria-hidden="true" data-dismiss="alert" class="close" type="button">&chi;</button>
        {{session('success')}}
    </div>
@endif

@if (session('error'))
    <div class="alert alert-danger alert-dismissable">
        <button aria-hidden="true" data-dismiss="alert" class="close" type="button">&chi;</button>
        {{session('error')}}
    </div>
@endif
