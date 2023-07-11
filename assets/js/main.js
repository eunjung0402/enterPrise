$(function(){
    gsap.set('.header',{yPercent:-100,})
    gsap.set('.sc_visual .visual_area',{opacity:0})
    gsap.set('.sc_talent .sticky_wrap .group_talent',{yPercent:30})
    gsap.set('.sc_choi .group_text',{opacity:0})


    // 인트로 텍스트 모션
    introTextMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_visual',
            start:'0% 0%',
            end:'100% 100%',
            //markers:true,
            scrub:1,
        }
    })

    introTextMotion
    .to('.sc_visual .opacity_bg',{opacity:1})
    .to('.big_text_1',{opacity:1})
    .to('.header',{yPercent:0})
    .to('.big_text_1',{opacity:0})
    .to('.big_text_2',{opacity:1})
    .to('.big_text_2',{opacity:0})
    .to('.big_text_3',{opacity:1})
    .to('.big_text_3',{opacity:0})
    .to('.small_text_1',{opacity:1})



    // info sticky section
    infoStickyMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_info',
            start:'0% 0%',
            end:'100% 100%',
            //markers:true,
            scrub:1,
        }
    })

    infoStickyMotion
    .addLabel('text1')
    .to('.sc_info .opacity_bg',{opacity:1},'text1')
    .to('.sc_info .text_1',{opacity:1},'text1')
    .addLabel('text2')
    .to('.sc_info .text_1 .right_text',{xPercent:100},'text2')
    .to('.sc_info .text_1 .left_text',{xPercent:-100},'text2')
    .to('.sc_info .opacity_bg',{opacity:0},'text2')
    .to('.sc_info .text_1',{opacity:0},'text2')
    .to('.sc_info .img_sticky_1',{yPercent:-100})
    .to('.sc_info .img_sticky_2',{yPercent:-100})
    .addLabel('text3')
    .to('.sc_info .opacity_bg',{opacity:1},'text3')
    .to('.sc_info .text_2',{opacity:1},'text3')


    // proof move1 section
    proofInnerMotion1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_proof1',
            start:'0% 80%',
            end:'100% 100%',
            //markers: true,
            scrub:1
        }
    })

    proofInnerMotion1
    .addLabel('text')
    .to('.sc_proof1 .move1 .right_text',{xPercent:22},'text')
    .to('.sc_proof1 .move1 .left_text',{xPercent:-20},'text')
    .to('.sc_proof1 .move1 .bar.top',{xPercent:-100},'text')
    .to('.sc_proof1 .move1 .bar.bottom',{xPercent:100},'text')


    proofInnerMotion2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_proof2',
            start:'0% 80%',
            end:'100% 100%',
            //markers: true,
            scrub:1
        }
    })

    proofInnerMotion2
    .addLabel('text')
    .to('.sc_proof2 .move2 .right_text',{xPercent:22},'text')
    .to('.sc_proof2 .move2 .left_text',{xPercent:-20},'text')
    .to('.sc_proof2 .move2 .bar.top',{xPercent:-100},'text')
    .to('.sc_proof2 .move2 .bar.bottom',{xPercent:100},'text')

    
    // 새로 스크롤 모션
    hrScrollMotion1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_talent',
            start:'0% 0%',
            end:'100% 100%',
            //markers: true,
            scrub:1
        }
    })

    hrScrollMotion1
    .to('.sc_talent .sticky_wrap .group_talent',{yPercent:0},)


    // 백그라운드 블랙 모션
    hrScrollMotion2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_possible',
            start:'0% 70%',
            end:'0% 0%',
            //markers: true,
            scrub:1
        }
    })

    hrScrollMotion2
    .addLabel('bgBlack')
    .to('.sc_talent',1,{'background':'#000'},'bgBlack')
    .to('.sc_possible',1,{'background':'#000'},'bgBlack')
    

    // 옆으로 이동 모션
    hrScrollMotion3 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_possible',
            start:'0% 0%',
            end:'100% 100%',
            //markers: true,
            scrub:1,
            invalidateOnRefresh:true
        }
    })

    hrScrollMotion3
    .addLabel('move')
    .to('.sc_possible .slide_wrap',{xPercent:-100},'move')
    .to('.sc_possible .slide_wrap',{x:()=>{
        return window.innerWidth;
    }},'move')



    // 옆으로 이동 모션
    gsap.set('.hr_scroll .card_item .img_box.center img:nth-child(2)',{opacity:0})
    gsap.set('.hr_scroll .card_item .img_box.center .color_title',{opacity:0})
    gsap.set('.hr_scroll .card_item .img_box.center .color_bg',{opacity:0})
    gsap.set('.hr_scroll .text_item',{opacity:0})
    hrScrollMotion4 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_id',
            start:'0% 0%',
            end:'100% 100%',
            //markers: true,
            scrub:1,
        }
    })

    hrScrollMotion4
    .to('.sc_id .slide_wrap',{x:-420})
    .addLabel('firstScroll')
    .to('.left1 .row_scroll:nth-child(2)',{x:-303-24},'firstScroll')
    .to('.left1 .row_scroll:nth-child(3)',{x:(-303-24)*2},'firstScroll')
    .to('.left1 .row_scroll:nth-child(4)',{x:(-303-24)*3},'firstScroll')
    .to('.left1 .row_scroll .img_box.center img:nth-child(1)',0.1,{opacity:0},'firstScroll')
    .to('.left1 .row_scroll .img_box.center img:nth-child(2',{opacity:1},'firstScroll+=0.1')
    .to('.left1 .row_scroll .img_box.center img:nth-child(2)',0.1,{opacity:0})
    .addLabel('topScroll')
    .to('.left1 .row_scroll .img_box.center .color_title',0.1,{opacity:1},'topScroll')
    .to('.sc_id .group_possible',{yPercent:-100},'topScroll')
    .to('.card_list.last .card_item.blur img',0.1,{'filter':'blur(20px)'})
    .addLabel('lastScroll')
    .to('.card_list.last .card_item.blur:nth-child(1)',{x:-303-23},'lastScroll')
    .to('.card_list.last .card_item.blur:nth-child(2)',{x:100+(-353-23)*2},'lastScroll')
    .to('.card_list.last .card_item.blur:nth-child(3)',{x:100+(-336-23)*3},'lastScroll')
    .addLabel('lastOpacity')
    .to('.left1 .row_scroll .img_box.center .color_bg',0.1,{opacity:1},'lastOpacity')
    .to('.hr_scroll .text_item',{opacity:1},'lastOpacity')



    // 백그라운드 블랙 모션
    bgBlackMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_change',
            start:'0% 60%',
            end:'100% 100%',
            //markers: true,
            scrub:1
        }
    })
    bgBlackMotion
    .addLabel('bg')
    .to('.sc_id',{'background':'#fff'},'bg')
    .to('.sc_change',{'background':'#fff'},'bg')
    .to('.sc_change',{'color':'#000'},'bg')



    // 옆으로 이동 모션
    hrScrollMotion5 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_future',
            start:'0% 0%',
            end:'100% 100%',
            //markers: true,
            scrub:1,
        }
    })

    hrScrollMotion5
    .addLabel('move')
    .to('.sc_future .slide_wrap',{x:-473},'move')
    .to('.sc_future .card_item.bg_3',0.1,{'background':'rgba(0,0,0,0.2)'},'move')
    .to('.sc_future .card_item.bg_3 img',0.2,{'filter':'blur(30px)'},'move')




    gsap.set('.sc_use .bg_4 .text_wrap',{opacity:0})
    // 옆으로 이동 모션
    hrScrollMotion6 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_use',
            start:'0% 0%',
            end:'100% 100%',
            //markers: true,
            scrub:1,
        }
    })

    hrScrollMotion6
    .addLabel('init')
    .to('.sc_use .bg_4 .text_wrap',{opacity:1,'z-index':'9'},'init')
    .to('.sc_use .bg_4 .card_img img',{'filter':'blur(10px)'},'init')
    .to('.sc_use .slide_wrap',{x:-773})
    

    
    gsap.set('.sc_banner .left',{xPercent:-50})
    gsap.set('.sc_banner .right',{xPercent:50})
    gsap.set('.sc_banner .title_area',{opacity:0})
    // banner section
    bannerMotion1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_banner',
            start:'0% 90%',
            end:'100% 100%',
            //markers: true,
            scrub:1
        }
    })

    bannerMotion1
    .addLabel('move')
    .to('.sc_banner .left',{xPercent:0},'move')
    .to('.sc_banner .right',{xPercent:0},'move')
    .to('.sc_banner .banner_bg_area',0,{opacity:1})
    .to('.sc_banner .title_area',{opacity:1})


    // 최소라 section
    choiMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc_choi',
            start:'0% 0%',
            end:'100% 100%',
            //markers: true,
            scrub:1
        }
    })

    choiMotion
    .to(".sc_choi .group_text",{opacity:1})



    // 이노베이션 그라운드 section
    gsap.set('.sc_banner2',{yPercent:100})
    bottomMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'footer',
            start:'100% 100%',
            end:'100% 100%',
            //markers: true,
            scrub:1,
            
        }
    })

    bottomMotion
    .to('.fix_btn a',{opacity:1,"visibility":"visible"})
    .to(".sc_banner2",{yPercent:0})
    .to('.sc_banner2 .color_item_area .banner_color_bg',{opacity:1})
    .to(".sc_banner2 .color_item_area",{'animation':'marquee 20s infinite linear'})
    



    // 헤더 색상변경 모션
    $(".bg_white").each(function(i,el){
        headerBlackMotion = gsap.timeline({
        scrollTrigger:{
            trigger:el,
            start:"0% 0%",    
            end:"100% 100%",     
            //markers:true,       
            scrub:1,              
            }
        })
        headerBlackMotion
        .addLabel('header')
        .to('.header .logo img',{filter:"none"},'header')
        .to('.gnb .link_gnb',{color:"#000"},'header')
        .to('.header .lang_icon svg path',{stroke:"#000"},'header')
        .to('.header .arrow_icon svg path',{stroke:"#000"},'header')
    })
    $(".bg_black").each(function(i,el){
        headerWhiteMotion = gsap.timeline({
        scrollTrigger:{
            trigger:el,
            start:"0% 00%",    
            end:"100% 100%",     
            //markers:true,       
            scrub:1,              
            }
        })
        headerWhiteMotion
        .addLabel('header')
        .to('.header .logo img',{filter:"brightness(0) invert(1)"},'header')
        .to('.gnb .link_gnb',{color:"#fff"},'header')
        .to('.header .lang_icon svg path',{stroke:"#fff"},'header')
        .to('.header .arrow_icon svg path',{stroke:"#fff"},'header')
    })

    // 메인 비주얼 하단 버튼 클릭시 다음 섹션으로 이동
    $('.intro_scroll_down').click(function(){
        gsap.to(window, {duration: 2, scrollTo:"#id_info"});
    })
})