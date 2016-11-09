<?php
/**
 * page_sidebar_alt.php
 *
 * Author: pixelcave
 *
 * The alternative sidebar of each page
 *
 */
?>
        <!-- Alternative Sidebar -->
<div id="sidebar-alt" tabindex="-1" aria-hidden="true">
    <!-- Toggle Alternative Sidebar Button (visible only in static layout) -->
    <a href="javascript:void(0)" id="sidebar-alt-close" onclick="App.sidebar('toggle-sidebar-alt');"><i
                class="fa fa-times"></i></a>

    <!-- Wrapper for scrolling functionality -->
    <div id="sidebar-scroll-alt">
        <!-- Sidebar Content -->
        <div class="sidebar-content">
            <!-- Profile -->
            <div class="sidebar-section">
                <h2 class="text-light">Profile</h2>

                @if(Admin::user())
                    <form action="{{URL::to('/admin/administrators/edit/'.Admin::user()['id'])}}" method="post"
                          class="form-control-borderless">
                        {{csrf_field()}}
                        <div class="form-group">
                            <label for="side-profile-name">First Name</label>
                            <input type="text" id="first_name" name="first_name" class="form-control"
                                   value="{{Admin::user()['first_name']}}">
                        </div>
                        <div class="form-group">
                            <label for="side-profile-name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" class="form-control"
                                   value="{{Admin::user()['last_name']}}">
                        </div>
                        <div class="form-group">
                            <label for="side-profile-email">Email</label>
                            <input type="email" id="email" name="email" class="form-control"
                                   value="{{Admin::user()['email']}}">
                        </div>
                        <div class="form-group">
                            <label for="password">New Password</label>
                            <input type="password" id="password" name="password"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Confirm New Password</label>
                            <input type="password" id="password_confirmation" name="password_confirmation"
                                   class="form-control">
                        </div>
                        <div class="form-group remove-margin">
                            <button type="submit" class="btn btn-effect-ripple btn-primary"
                                    onclick="App.sidebar('close-sidebar-alt');">Save
                            </button>
                        </div>
                    </form>
                @endif

            </div>
            <!-- END Profile -->
        </div>
        <!-- END Sidebar Content -->
    </div>
    <!-- END Wrapper for scrolling functionality -->
</div>
<!-- END Alternative Sidebar -->

