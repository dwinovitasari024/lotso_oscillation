//Nama:Dwi Novitasari
function setup() {
    // Put setup code here
    createCanvas(700,350);
    x= 580
    j= 0;
    t= 0;
    k= 0;
}
function draw() {
    //Membuat karakter lotso
    background(220);
    line(349,0,349,349);

    //Gambar bagian kiri:
    //Telinga
    fill(220,20,60);
    ellipse(125,125,85,90);
    fill(245,245,223);
    ellipse(125,125,35,45);
    fill(220,20,60);
    ellipse(275,125,85,90);
    fill(245,245,223);
    ellipse(275,125,35,45);
    fill(220,20,60);

     //kepala
     fill(220,20,60);
     ellipse(200,200,190,190);

    //Area lingkaran hidung warna beige
    fill(245,244,223);
    ellipse(200,230,130,95);

    //Hidung
    fill(165,42,42);
    ellipse(200,220,60,40);

    //mulut
    ellipse(200,253,60,10);

    //mata
    fill(245,245,223);
    ellipse(170,170,25,30);
    fill(0,0,0);
    ellipse(170,170,13,13);
    fill(245,245,233);
    ellipse(230,170,25,30);
    fill(0,0,0);
    ellipse(230,170,13,13);

    //Gambar sebelah kanan:
    //Telinga
    fill(220,20,60);
    ellipse(475,125,85,90);
    fill(245,245,223);
    ellipse(475,125,35,45);
    fill(220,20,60);
    ellipse(625,125,85,90);
    fill(245,245,223);
    ellipse(625,125,35,45);

    //Kepala
    fill(220,20,60);
    ellipse(550,200,190,190);

    //Area lingkaran hidung warna beige
    fill(245,244,223);
    ellipse(550,230,130,95);

    //Hidung
    fill(165,42,42);
    ellipse(550,220,60,40);

    //mulut
    ellipse(550,253,60,10);

    //mata
    fill(245,245,223);
    var x= 530 + 30*Math.sin(PI/10*j)
    j+=1;
    ellipse(x,170,25,30);
    fill(0,0,0);
    ellipse(x,170,13,13);
    fill(245,245,233);
    var x= 585 + 30*Math.sin(PI/10*t)
    t+=1;
    ellipse(x,170,25,30);
    fill(0,0,0);
    ellipse(x,170,13,13);


    
    
}
