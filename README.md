<!DOCTYPE html>
<html>
<head>
<title>
lol
</title>

<style>
h1:hover{
 color:#0f0;
 cursor: pointer;
}
img{
    animation:rotate 2s ease infinite;
}

@keyframes rotate{
    0%{
        transform:rotateZ(0deg);
    }
    20%{
        transform:rotateZ(72deg);
    }
    40%{
        transform:rotateZ(144deg);
    }
    60%{
        transform:rotateZ(216deg);
    }
    80%{
        transform:rotateZ(288deg);
    }
    100%{
        transform:rotateZ(360deg);
    }
}
</style>
<img src="./public/images/feature_img_2.png" >
</head>
<body>
<h1> yyhhh </h1>

<ul>
<li>lol</li>
</ul>

<form>
<label>UserName:
<input type="text" id="username"/>
</label></br>
<label>Password:
<input type="password" id="password"/>
</label>
<br/>
<span id="mess"></span>
<input type="submit" value="Log In" />
</form>
</body>
</html>