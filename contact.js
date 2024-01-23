<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <ul>
            <div class="burger burger2" id="burger">
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            </div>
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/service.html">Services</a></li>
            <li><a href="/products.html">Our products</a></li>
            <li><a href="/contact.html">Contact us</a></li>
        </ul>
    </nav>
    <div class="hamnav" id="hamnav">
        <ul>
            <li><a class="links" href="/">Home</a></li>
            <li><a class="links" href="/about.html">About</a></li>
            <li><a class="links" href="/service.html">Services</a></li>
            <li><a class="links" href="/products.html">Our products</a></li>
            <li><a class="links" href="/contact.html">Contact us</a></li>
        </ul>
    </div>
    <div class="cbox">
       <div class="input">
           <form>
               <h1>Contact Us?</h1>
               <input type="text" placeholder="Your name here." class="inputarea" value="" id="name" required><br>
               <input type="email" placeholder="Your e-mail here." class="inputarea" value="" id="email" required><br>
               <input type="text" placeholder="Your subject." class="inputarea" value="" id="subject" required><br>
               <textarea placeholder="Your description here." class="inputarea" id="textarea" value="" id="desc" required></textarea><br>
               <button type="submit" class="cbtn" id="cbtn">Contact &rarr;</button>
           </form>
       </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
