var bodyX = 242;
var bodyY = bodyX-7;
var bodyW = 120;
var bodyH = bodyW/-1;
var eyeball = bodyX-16;
var eyeball2 = bodyY-102;

draw = function() {
    stroke(18, 13, 13);
    //sky
    background(35, 206, 209);
    fill(0, 255, 30);
    //grass/hill
    rect(-32,222,491,200,100);
    fill(240, 209, 36);
    
    //panda
    fill(255, 255, 255);
    ellipse(bodyX, bodyY, bodyW, bodyH); // body
    ellipse(bodyX, bodyY-81, bodyW-45, 75); // face
    ellipse(eyeball,eyeball2,23,23);//eyeball white part
    ellipse(eyeball+30,eyeball2,23,23);//eyeball white part
    fill(0, 0, 0);
     ellipse(eyeball-2,eyeball2,15,15); // eyeball black part
    ellipse(eyeball+28,eyeball2,15,15);// eyeball black part
    ellipse(bodyX-6, bodyY+10, bodyW-46, 71);//spots
    fill(235, 235, 235);
    ellipse(bodyX+37, bodyY+-114, bodyW-86, 33);//spots
    fill(235, 235, 235);
    ellipse(bodyX-0, bodyY+-62, bodyW-90, 21);//mouth
    fill(255, 0, 0);
    ellipse(bodyX-0, bodyY+-56, bodyW-104, 6);//tongue
};
