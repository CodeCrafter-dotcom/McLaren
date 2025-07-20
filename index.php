<?php
   $userAgent = $_SERVER['HTTP_USER_AGENT'];

   if (preg_match('/Mobile|Android|iPhone/', $userAgent)) {
       header('Location: https://codecrafter-dotcom.github.io/McLaren/');
       exit();
   } else {
       header('Location: https://codecrafter-dotcom.github.io/FromBoard-Delivery/');
       exit();
   }
   ?>
   
