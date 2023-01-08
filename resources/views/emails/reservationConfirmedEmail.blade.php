
<!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {
            text-decoration: underline !important;
        }

        .container {
            max-width: 680px;
            margin: 0 auto;
        }

        .logotype {
            background: #000;
            color: #fff;
            width: 75px;
            height: 75px;
            line-height: 75px;
            text-align: center;
            font-size: 11px;
        }

        .column-title {
            background: #eee;
            text-transform: uppercase;
            padding: 15px 5px 15px 15px;
            font-size: 11px
        }

        .column-detail {
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }

        .column-header {
            background: #eee;
            text-transform: uppercase;
            padding: 15px;
            font-size: 11px;
            border-right: 1px solid #eee;
        }

        .row {
            padding: 7px 14px;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
        }

        .alert {
            background: #ffd9e8;
            padding: 20px;
            margin: 20px 0;
            line-height: 22px;
            color: #333
        }

        .socialmedia {
            background: #eee;
            padding: 20px;
            display: inline-block
        }
        h3{
            text-align: start;
        }


.product-card {
    width: 380px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: #fafafa;
}

.badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: rgb(0, 119, 255);
    color: #fff;
    padding: 3px 10px;
}

.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 0;
    background: #f0f0f0;
}

.product-tumb img {
    max-width: 100%;
    max-height: 100%;
}

.product-details {
    padding: 30px;
}

.product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;
}

.product-details h4 a {
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;

}

.product-details h4 a:hover {
    color: rgb(0, 119, 255);
    text-decoration: none;
}

.product-details p {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #999;
}

.product-bottom-details {
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.product-bottom-details div {
    float: left;
    width: 100%;
}

.product-price {
    font-size: 18px;
    color: rgb(0, 119, 255);
    font-weight: 600;
}

.product-price small {
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
}

.product-links {
    text-align: right;
}

.product-links a {
    display: inline-block;
    margin-left: 5px;
    color: #e1e1e1;
    transition: 0.3s;
    font-size: 17px;
    text-decoration: none;
}

.product-links a:hover {
    color: rgb(0, 119, 255);
    text-decoration: none;
}
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">

                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        {{-- <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;"> --}}
                                        {{-- {{ $details['reservation'] }}</h1> --}}

                                        <div class="container">

                                            <table width="100%">
                                                <tr>
                                                    <td width="75px">
                                                        <div class="logotype">AtypikHouse</div>
                                                    </td>
                                                    <td width="100%"
                                                        style="background: #e9e9e9;border-left:15px solid #fff; padding-left:30px;font-size:26px;font-weight:bold;letter-spacing:-1px;">
                                                        Confirmation</td>
                                                    <td></td>
                                                </tr>
                                            </table>

                                            <h3 style="text-align:center;">Réservation #ATK00{{  $details['reservation']->id }}</h3>
                                            <table width="100%" style="border-collapse: collapse;">
                                                <tr>
                                                    <td width="180px" class="column-title">E-mail
                                                    <td>
                                                    <td class="column-detail">{{ $details['user']->email }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td class="column-title">Nom complet
                                                    <td>
                                                    <td class="column-detail">{{  $details['user']->lastname }} {{  $details['user']->firstname }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td class="column-title">Téléphone
                                                    <td>
                                                    <td class="column-detail">{{  $details['userProfile']->phone }}
                                                    <td>
                                                    </td>
                                                </tr>

                                            </table>

                                            <h3>Adresse de facturation</h3>
                                            <table width="100%" style="border-collapse: collapse;">
                                                <tr>
                                                    <td width="180px" class="column-title">Nom complet
                                                    <td>
                                                    <td class="column-detail">{{  $details['user']->lastname }} {{  $details['user']->firstname }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td width="180px" class="column-title">Adresse
                                                    <td>
                                                    <td class="column-detail">{{  $details['userProfile']->address }}
                                                    <td>
                                                </tr>

                                                <tr>
                                                    <td class="column-title">Ville
                                                    <td>
                                                    <td class="column-detail">{{  $details['userProfile']->city }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td class="column-title">Code postal
                                                    <td>
                                                    <td class="column-detail">{{  $details['userProfile']->postalCode }}
                                                    <td>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="column-title">Pays
                                                    <td>
                                                    <td class="column-detail">{{  $details['userProfile']->country }}
                                                    <td>
                                                    </td>
                                                </tr>

                                            </table>
                                            <h3>Détails</h3>

                                            <table width="100%"
                                                style="border-collapse: collapse;border-bottom:1px solid #eee;">
                                                <tr>
                                                    <td width="20%" class="column-header">Annonce ID</td>
                                                    <td width="40%" class="column-header">Check in</td>
                                                    <td width="30%" class="column-header">Check out</td>
                                                    <td width="10%" class="column-header">Nombre de nuits</td>
                                                </tr>

                                                <tr>
                                                    <td class="row">{{  $details['annonce']->id }}</td>
                                                    <td class="row">{{  $details['reservation']->checkIn }}</td>
                                                    <td class="row">{{  $details['reservation']->checkOut }}</td>
                                                    <td class="row">{{  $details['reservation']->nightCount }}</td>
                                                </tr>


                                            </table>

                                            <table width="100%"
                                                style="border-collapse: collapse;border-bottom:1px solid #eee;">

                                                <tr>

                                                    <td class="row">Total :</td>
                                                    <td class="row">€{{  $details['reservation']->amount }}</td>
                                                </tr>


                                            </table>

                                            <h3>Proriétaire #ATK004958</h3>
                                            <table width="100%" style="border-collapse: collapse;">
                                                <tr>
                                                    <td width="180px" class="column-title">Nom complet
                                                    <td>
                                                    <td class="column-detail">{{  $details['owner']->lastname }} {{  $details['owner']->firstname }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td width="180px" class="column-title">Adesse
                                                    <td>
                                                    <td class="column-detail">{{  $details['ownerProfile']->address }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td class="column-title">Ville
                                                    <td>
                                                    <td class="column-detail">{{  $details['ownerProfile']->city }}
                                                    <td>
                                                </tr>
                                                <tr>
                                                    <td class="column-title">Code postal
                                                    <td>
                                                    <td class="column-detail">{{  $details['ownerProfile']->postalCode }}
                                                    <td>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="column-title">Pays
                                                    <td>
                                                    <td class="column-detail">{{  $details['ownerProfile']->country }}
                                                    <td>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="column-title">Téléphone
                                                    <td>
                                                    <td class="column-detail">{{  $details['ownerProfile']->phone }}
                                                    <td>
                                                    </td>
                                                </tr>

                                            </table>

                                            <h3>Hébergement réservé</h3>

                                            <div class="product-card">
                                                <div class="badge">{{  $details['typeLogement']->name }}</div>
                                                <div class="product-tumb">
                                                    {{-- <img src="http://127.0.0.1/api/getAnnonceCoverImageFromApi/?id={{ $details['annonce']->id }}" alt=""> --}}
                                                   <a href="http://127.0.0.1/#/annonce/?id={{  $details['annonce']->id }}"><img src="{{ asset('/storage/'.$details['annonceCoverImage']->path.'/'.$details['annonceCoverImage']->image) }}" alt=""></a>

                                                </div>
                                                <div class="product-details">
                                                    <span class="product-catagory">{{  $details['annonce']->city }}</span>
                                                    <h4 style="word-break: break-word;">{{ $details['annonce']->title }}</h4>
                                                    <div class="product-bottom-details">
                                                        <div class="product-price">{{ $details['annonce']->price }}</div>
                                                        <div class="product-links">
                                                            <a href=""><i class="fa fa-heart"></i></a>
                                                            <a href=""><i class="fa fa-shopping-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <h3>Payée le {{ $details['reservation']->created_at }}</h3>



                                          </div><!-- container -->



                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p
                                style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                &copy; <strong>www.AtypikHouse.com</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>
