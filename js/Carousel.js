/**
 * Created by Administrator on 2017/2/18.
 */
//��ȡclassΪCarousel��div
    var box=document.getElementsByClassName("Carousel")[0];
//��ȡclassΪCarousel_big��div
    var Carousel_div = document.getElementsByClassName("Carousel_big")[0];
//��ȡclassΪCarousel_big��div�����img
    var Carousel_img = document.querySelectorAll(".Carousel_big img");
//��ȡCarousel_div�ĸ߶�
    var divHeight = Carousel_div.offsetHeight;
//��ȡCarousel_img�ĸ߶�
    var imgHeight = Carousel_img[0].height;
//��ȡclassΪcarousel_shadow��div
    var shadow = document.getElementsByClassName("carousel_shadow")[0];
//��ȡshadow�ĸ�
    var shadoeHeight = shadow.offsetHeight;
//��ȡshadow���붥���ĸ߶�
    var shadow_top = shadow.style.top;
//��ȡCarousel_div���붥���ĸ߶�
    var Carousel_div_top = Carousel_div.style.top;
//��������ʱ�亯������
    var time1 = null;
//����һ����ʱ�亯������
    var time2 = null;

//ͼƬ�ƶ�����
    function move() {
        //����λ�ƴ���
        var cs = 13;
        //����ÿ��λ�ƾ���
        var jl = imgHeight / cs;
        //����λ���ܾ���
        var zjl = 0;
        //ͼƬ��������
        function go() {
            Carousel_div.style.top = parseInt(Carousel_div.style.top) + jl + 'px';
            zjl += jl;
            if (zjl == imgHeight) {
                clearTimeout(time2);
                time2 = null;
                zjl = 0;
            }
            else {
                time2 = setTimeout(go, 80);
            }
        }
        if(parseInt(Carousel_div.style.top)>-390)
        {
            Carousel_div.style.top=-1560+'px';
        }
        go();
        if(parseInt(shadow.style.top)<300){
            shadow.style.top=(parseInt(shadow.style.top)+100)+'px';
        }else{
            shadow.style.top=parseInt(shadow_top)+'px';
        }
    }

    //��������ͼƬʱ���ں���ֹͣ
    box.onmouseover=function() {
        if (time1 != null) {
            clearInterval(time1);
            time1=null;
        }
    };
    box.onmouseout=function(){
        time1=setInterval(move,3000);
    };
    time1 = setInterval(move, 3000);
//}
//Carousel();

//��ҳѡ�
//function Boutique(){
    var Boutique_books=document.getElementsByClassName("Boutique_book_top_book");
    var Boutique_li=document.querySelectorAll(".Boutique_spot li");
    var btn_left=document.querySelectorAll(".Boutique_spot span")[0];
    var btn_right=document.querySelectorAll(".Boutique_spot span")[1];
    var num=0;
    //���li��ťʱ
    for(var i=0;i<Boutique_li.length;i++){
        Boutique_li[i].index=i;
        Boutique_li[i].onclick= function () {
            for(var j=0;j<Boutique_li.length;j++){
                Boutique_li[j].className="";
                Boutique_books[j].style.display="none";
            }
            Boutique_li[this.index].className="active";
            Boutique_books[this.index].style.display="flex";
            num=this.index;
        }
    }
    //�����ťʱ
    btn_left.onclick= function () {
        if(num==0){
            num=2;
        }
        else{
            num--
        }
        Boutique_li[num].onclick();
    };
    //����Ұ�ťʱ
    btn_right.onclick= function () {
        if(num==2){
            num=0;
        }
        else{
            num++
        }
        Boutique_li[num].onclick();
    };

