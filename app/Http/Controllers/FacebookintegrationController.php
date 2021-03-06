<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Exceptions;
use Facebook;
use Session;

class FacebookintegrationController extends Controller
{

    public function test(Request $r)
    {
        $user = request()->all();
        Session::put('facebook', $user);
    }
//    public function test(Request $request)
//    {
//        $name =$request->name;
//        echo $name;
//        $sessionId = $request->session()->put(['
//        name'=> $name]);
//
//    }

    public function logout(Request $r)
    {
        Session::pull('facebook');
        return redirect('/');
    }

    public function tests()
    {


        $fb = new Facebook\Facebook([
            'app_id' => '271680366562240',
            'app_secret' => '631616238aeefd27ff453e63ce45f81d',
            'default_graph_version' => 'v2.8',
        ]);
//        try {
//            // Get the \Facebook\GraphNodes\GraphUser object for the current user.
//            // If you provided a 'default_access_token', the '{access-token}' is optional.
//            $response = $fb->get('/me', '{access-token}');
//        } catch(\Facebook\Exceptions\FacebookResponseException $e) {
//            // When Graph returns an error
//            echo 'Graph returned an error: ' . $e->getMessage();
//            exit;
//        } catch(\Facebook\Exceptions\FacebookSDKException $e) {
//            // When validation fails or other local issues
//            echo 'Facebook SDK returned an error: ' . $e->getMessage();
//            exit;
//        }
//
//        $me = $response->getGraphUser();
//        echo 'Logged in as ' . $me->getName();

        $helper = $fb->getRedirectLoginHelper();

        try {
            $accessToken = $helper->getAccessToken();
        } catch (Facebook\Exceptions\FacebookResponseException $e) {
            // When Graph returns an error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
            // When validation fails or other local issues
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }

        if (!isset($accessToken)) {
            if ($helper->getError()) {
                header('HTTP/1.0 401 Unauthorized');
                echo "Error: " . $helper->getError() . "\n";
                echo "Error Code: " . $helper->getErrorCode() . "\n";
                echo "Error Reason: " . $helper->getErrorReason() . "\n";
                echo "Error Description: " . $helper->getErrorDescription() . "\n";
            } else {
                header('HTTP/1.0 400 Bad Request');
                echo 'Bad request';
            }
            exit;
        }

// Logged in
        echo '<h3>Access Token</h3>';
        var_dump($accessToken->getValue());

// The OAuth 2.0 client handler helps us manage access tokens
        $oAuth2Client = $fb->getOAuth2Client();

// Get the access token metadata from /debug_token
        $tokenMetadata = $oAuth2Client->debugToken($accessToken);
        echo '<h3>Metadata</h3>';
        var_dump($tokenMetadata);

// Validation (these will throw FacebookSDKException's when they fail)
        $tokenMetadata->validateAppId('271680366562240');
// If you know the user ID this access token belongs to, you can validate it here
//$tokenMetadata->validateUserId('123');
        $tokenMetadata->validateExpiration();

        if (!$accessToken->isLongLived()) {
            // Exchanges a short-lived access token for a long-lived one
            try {
                $accessToken = $oAuth2Client->getLongLivedAccessToken($accessToken);
            } catch (Facebook\Exceptions\FacebookSDKException $e) {
                echo "<p>Error getting long-lived access token: " . $helper->getMessage() . "</p>\n\n";
                exit;
            }

            echo '<h3>Long-lived</h3>';
            var_dump($accessToken->getValue());
        }

        $_SESSION['fb_access_token'] = (string)$accessToken;

// User is logged in with a long-lived access token.
// You can redirect them to a members-only page.
        header('Location: https://example.com/members.php');
    }
}
