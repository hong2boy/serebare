// 각 하단 주석 내용 참고 후 파란색 글씨 부분 오른쪽으로 명령어를 입력해 주세요.



// 01. 메인 페이지의 아래위로 움직이는 메인슬라이드에서 삭제하고 싶은 슬라이드를 선택
    //슬라이드의 ID값의 이름을 기입하시면 됩니다.
    // 예시)
    //  <!--@import(/layout/basic/mainSection_5rowRecommend.html)--> 를 삭제하고 싶은 경우 해당 문서를 열어보시면
    // <div data-use = "" id="mainSection_5rowRecommend" class="section"> 부분에서
    // data-use = "" 안에 off 를 작성해주세요

    // 예시) <div data-use = "off" id="mainSection_5rowRecommend" class="section">

    // 반대로 다시 사용하려고 하는 경우는 on을 작성해주세요( 그냥 아무것도 작성안하고 지우셔도 됩니다 )

    // 예시)<div data-use = "on" id="mainSection_5rowRecommend" class="section"> 혹은
    // 예시)<div data-use = "" id="mainSection_5rowRecommend" class="section">

    // 아래 수정완료 후에는 꼭 브라우저창에서 ctrl+F5 키를 눌러완전히 새로고침하여 확인해 주시고, (맥에서는 command + shift + r 키를 눌러서 확인해 주세요)






    // 각각 ""안에 on 또는 off 를 기입
    //아래의 입력 사항에 해당하는 사항이 없을때는 [];을 지우지 마시고 남겨두세요
    //ex))    const bannerUse ="on";에서 아무것도 원하지 않을때는
    //   const bannerUse ="";  <- 이런식으로 남겨두시고 됩니다.


// 02. 상단 띠배너 사용여부
    const bannerUse = "off";


// 03. 상품 상세페이지내 각 설정 부분 노출 여부

    //공유 버튼
      var pd_Share = "on";

    //추가  혜택 안내
      var pd_PlusDiscount = "off";

    //무이자 할부 카드 혜택 안내
      var pd_Card_FreeInstallment = "off";

    //네이버 톡톡
      var pd_NaverTalk = "on";

    //카카오톡 플러스
      var pd_KakaoTalk = "on";

    //멤버쉽 혜택 안내 -> 컨탠츠 부분 최상단 내용
      var pd_MemberShip = "off";

    //후기 배너 이미지
      var pd_Review_Banner = "off";
