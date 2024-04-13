import React, { useEffect, useState } from 'react';

const Detail = ({ productInfo }) => {

    return (
        <div id="detail" class="css-18eozqj el27cq0">
            <div class="css-8k5a6c ezy1ugy1"></div>
            <div class="css-kqvkc7 es6jciw1">
                <img src={productInfo.productImage} alt="상품 상세 이미지" class="css-1d3w5wq es6jciw0" />
            </div>
            <div class="css-1vc740i e11kghol1">
                <h3 class="css-nd38pl e11kghol0">상품고시정보</h3>
                <ul class="css-1lb3ltj ej1h6cm3">
                    <li class="css-1exh1as ej1h6cm1">품목 또는 명칭</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">포장단위별 내용물의 용량(중량), 수량, 크기</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">생산자, 수입품의 경우 수입자를 함께 표기</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">｢농수산물의 원산지 표시 등에 관한 법률｣에 따른 원산지</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">제조연월일, 소비기한 또는 품질유지기한</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">농수산물 – ｢농수산물 품질관리법｣에 따른 유전자변형농수산물 표시, 지리적 표시</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">축산물 - ｢축산법｣에 따른 등급 표시(1++ 등급 국내산 쇠고기의 경우 ｢소ㆍ돼지 식육의 표시방법 및 부위 구분기준｣에 따라 근내지방도 정보를 포함하여 표시), ｢가축 및 축산물 이력관리에 관한 법률｣에 따른 이력관리대상축산물 유무</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">수입 농수축산물 – “수입식품안전관리 특별법에 따른 수입신고를 필함”의 문구</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">상품구성</li><li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">보관방법 또는 취급방법</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li>
                    <li class="css-1exh1as ej1h6cm1">소비자 안전을 위한 주의사항 (｢식품 등의 표시ㆍ광고에 관한 법률 시행규칙｣ 제5조 및 [별표 2]에 따른 표시사항을 말함)</li>
                    <li class="css-15ohb0b ej1h6cm0">상품설명 및 상품이미지 참조</li><li class="css-1exh1as ej1h6cm1">소비자 상담 관련 전화번호</li>
                    <li class="css-15ohb0b ej1h6cm0">컬리 고객행복센터 (1644-1107)</li>
                </ul>
            </div>
            <div class="css-1vc740i e1j4wjnz1">
                <h3 class="css-nd38pl e1j4wjnz0">판매자정보</h3>
                <ul class="css-1lb3ltj ej1h6cm3">
                    <li class="css-1exh1as ej1h6cm1">판매자</li>
                    <li class="css-15ohb0b ej1h6cm0">컬리</li>
                </ul>
            </div>
            <div class="css-1vt9a6q e1711h2r7">
                <div class="css-1azakc e1711h2r6">
                    <span class="css-1wepwlf e1711h2r5">WHY KURLY</span>
                </div>
                <div class="css-4xwwak e1711h2r4">
                    <dl class="css-12dlzwv e1711h2r3">
                        <dt class="css-it4xr e1711h2r2">깐깐한 상품위원회</dt>
                        <dd class="css-164ekbt e1711h2r1">나와 내 가족이 먹고 쓸 상품을 고르는<br />마음으로 매주 상품을 직접 먹어보고,<br />경험해보고 성분, 맛, 안정성 등 다각도의<br />기준을 통과한 상품만을 판매합니다.
                            <span class="css-1ldxevt e1711h2r0">(온라인 기준 / 자사몰, 직구 제외)</span>
                        </dd>
                    </dl>
                    <dl class="css-12dlzwv e1711h2r3">
                        <dt class="css-csns7h e1711h2r2">차별화된 Kurly Only 상품</dt>
                        <dd class="css-164ekbt e1711h2r1">전국 각지와 해외의 훌륭한 생산자가<br />믿고 선택하는 파트너, 컬리.<br />3천여 개가 넘는 컬리 단독 브랜드, 스펙의<br />Kurly Only 상품을 믿고 만나보세요.
                            <span class="css-1ldxevt e1711h2r0">(온라인 기준 / 자사몰, 직구 제외)</span>
                        </dd>
                        </dl>
                    <dl class="css-12dlzwv e1711h2r3">
                        <dt class="css-r24z76 e1711h2r2">신선한 풀콜드체인 배송</dt>
                        <dd class="css-164ekbt e1711h2r1">온라인 업계 최초로 산지에서 문 앞까지<br />상온, 냉장, 냉동 상품을 분리 포장 후<br />최적의 온도를 유지하는 냉장 배송 시스템,<br />풀콜드체인으로 상품을 신선하게 전해드립니다.
                            <span class="css-1ldxevt e1711h2r0">(샛별배송에 한함)</span>
                        </dd>
                        </dl>
                    <dl class="css-12dlzwv e1711h2r3">
                        <dt class="css-1s9l9oc e1711h2r2">고객, 생산자를 위한 최선의 가격</dt>
                        <dd class="css-164ekbt e1711h2r1">매주 대형 마트와 주요 온라인 마트의 가격<br />변동 상황을 확인해 신선식품은 품질을<br />타협하지 않는 선에서 최선의 가격으로,<br />가공식품은 언제나 합리적인 가격으로<br />정기 조정합니다.
                        </dd>
                        </dl>
                    <dl class="css-12dlzwv e1711h2r3">
                        <dt class="css-iktv7d e1711h2r2">환경을 생각하는 지속 가능한 유통</dt>
                        <dd class="css-164ekbt e1711h2r1">친환경 포장재부터 생산자가 상품에만<br />집중할 수 있는 직매입 유통구조까지,<br />지속 가능한 유통을 고민하며 컬리를 있게<br />하는 모든 환경(생산자, 커뮤니티, 직원)이<br />더 나아질 수 있도록 노력합니다.
                        </dd>
                        </dl>
                        </div>
                        </div>
            <div class="css-0 e18xf2bx10">
                <div class="css-o0wurt e18xf2bx9">
                    <div class="css-0 e18xf2bx8">
                        <h5 class="css-rbx0sz e18xf2bx7">고객행복센터</h5>
                        <p class="css-1vh38tr e18xf2bx6">궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?
                            <span class="css-ekock0 e18xf2bx5">문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해 주시면 빠르게 도와드리겠습니다.</span>
                        </p>
                    </div>
                    <ul class="css-15889fd e18xf2bx4">
                        <li class="css-18zkc1e e18xf2bx3">
                            <strong class="css-x0he4f e18xf2bx2">전화 문의 1644-1107</strong>
                            <span class="css-1qjuprf e18xf2bx1">월~토요일 오전 7시 - 오후 6시</span>
                        </li>
                        <li class="css-18zkc1e e18xf2bx3">
                            <strong class="css-x0he4f e18xf2bx2">카카오톡 문의</strong>
                            <span class="css-1qjuprf e18xf2bx1">월~토요일 오전 7시 - 오후 6시</span>
                            <span class="css-1qjuprf e18xf2bx1">일/공휴일 오전 7시 - 오후 1시</span>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <strong class="css-xjrpkm e18xf2bx0">카카오톡에서 '컬리' 를 검색 후<br />대화창에 문의 및 불편사항을<br />남겨주세요.</strong>
                            </li>
                        <li class="css-18zkc1e e18xf2bx3">
                            <strong class="css-x0he4f e18xf2bx2">홈페이지 문의</strong>
                            <span class="css-1qjuprf e18xf2bx1">365일</span>
                            <span class="css-1qjuprf e18xf2bx1">로그인 &gt; 마이컬리 &gt; 1:1 문의</span>
                            <strong class="css-xjrpkm e18xf2bx0">고객센터 운영 시간에 순차적으로<br />답변해드리겠습니다.</strong>
                            </li>
                        </ul>
                            </div>
                        </div>
            <div class="css-xwfhcz e1wbvr7p4">
                <strong class="css-1whdyd5 e1wbvr7p3">교환 및 환불 안내</strong>
                <p class="css-1l0p3iw e1wbvr7p2">교환 및 환불이 필요하신 경우 고객행복센터로 문의해주세요.</p>
                <button type="button" class="css-1t0iw3m e1wbvr7p0">닫기</button>
            </div>
            <div class="css-zym26p e1wuccxq2">
                <strong class="css-ro4hvg e1wuccxq1">01. 상품에 문제가 있는 경우</strong>
            <p class="css-1sezoog e1wuccxq0">받으신 상품이 표시·광고 내용 또는 계약 내용과 다른 경우에는 상품을 받은 날부터 3개월 이내,
            그 사실을 알게 된 날부터 30일 이내에 교환 및 환불을 요청하실 수 있습니다.
            상품의 정확한 상태를 확인할 수 있도록 사진을 함께 보내주시면 더 빠른 상담이 가능합니다.
                <span class="css-13ttlil e1u4390v2">※ 배송 상품에 문제가 있는 것으로 확인되면 배송비는 판매자가 부담합니다.</span>
            </p>
            </div>
            <div class="css-zym26p e1wuccxq2">
                <strong class="css-ro4hvg e1wuccxq1">02. 단순 변심, 주문 착오의 경우</strong>
                <p class="css-1sezoog e1wuccxq0">
                    <strong class="css-e6zvdp e1u4390v1">신선 / 냉장 / 냉동 식품</strong>
                    상품의 특성상 재판매가 불가하여 단순 변심, 주문 착오, 주소 오입력 등 고객의 책임 있는 사유로 인한 교환 및 반품이 어려운 점 양해 부탁드립니다.
            상품에 따라 조금씩 맛이 다를 수 있으며, 개인의 기호에 따라 같은 상품도 다르게 느끼실 수 있습니다.
                    <strong class="css-e6zvdp e1u4390v1">유통기한 30일 이상 식품 (신선 / 냉장 / 냉동 제외) &amp; 기타 상품 (뷰티 제품, 생활용품)</strong>
                    상품을 받은 날부터 7일 이내 교환, 반품이 가능합니다. 고객행복센터로 문의해주세요.
                    <span class="css-13ttlil e1u4390v2">※ 단순 변심, 주문 착오, 주소 오입력 등 고객의 책임 있는 사유로 인한 교환 및 반품의 경우 고객님께서 왕복배송비 6,000원을 부담하셔야 합니다.</span>
                </p>
            </div>
            <div class="css-zym26p e1wuccxq2">
                <strong class="css-ro4hvg e1wuccxq1">03. 교환·반품이 불가한 경우</strong>
                <p class="css-1sezoog e1wuccxq0">다음에 해당하는 교환·환불 신청은 처리가 어려울 수 있으니 양해 부탁드립니다.
            <span class="css-1pcbtdr e1u4390v0">고객님의 책임 있는 사유로 상품이 멸실되거나 훼손된 경우
(단, 상품의 내용을 확인하기 위해 포장 등을 훼손한 경우는 제외)</span>
                    <span class="css-1pcbtdr e1u4390v0">고객님의 사용 또는 일부 소비로 상품의 가치가 감소한 경우</span>
                    <span class="css-1pcbtdr e1u4390v0">시간이 지나 다시 판매하기 곤란할 정도로 상품의 가치가 감소한 경우</span>
                    <span class="css-1pcbtdr e1u4390v0">복제가 가능한 상품의 포장이 훼손된 경우</span>
                    <span class="css-1pcbtdr e1u4390v0">고객님의 주문에 따라 개별적으로 생산되는 상품의 제작이 이미 진행된 경우</span>
                </p>
            </div>
            <div class="css-xwfhcz e1wbvr7p4">
                <strong class="css-1whdyd5 e1wbvr7p3">주문 취소 안내</strong>
                <p class="css-1l0p3iw e1wbvr7p2">
                    <strong class="css-1oekmga e1wbvr7p1">- [주문완료] 상태일 경우에만 주문 취소 가능합니다.
            - [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</strong>
                </p>
                <button type="button" class="css-1t0iw3m e1wbvr7p0">닫기</button>
            </div>
            <div class="css-zym26p e1wuccxq2">
                <strong class="css-ro4hvg e1wuccxq1">주문 취소 관련</strong>
                <p class="css-1sezoog e1wuccxq0">- [배송준비중] 부터는 취소가 불가하니, 반품으로 진행해주세요. (상품에 따라 반품이 불가할 수 있습니다.)
            - 주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.
            - 비회원은 App 또는 모바일 웹사이트에서 [마이컬리 &gt; 비회원 주문조회 페이지] 에서 취소가 가능합니다.
            - 일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.
            - 주문상품의 부분취소는 불가능합니다. 전체 주문 취소 후 다시 구매 해주세요.
            - 미성년자 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</p>
            </div>
            <div class="css-zym26p e1wuccxq2">
                <strong class="css-ro4hvg e1wuccxq1">결제 승인 취소 / 환불 관련</strong>
                <p class="css-1sezoog e1wuccxq0">- 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에 문의해주세요.
            - 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.</p>
            </div>
            <div class="css-mve3d0 e1raabu12">
                <strong class="css-1whdyd5 e1raabu11">배송관련 안내</strong>
                <p class="css-0 e1raabu10">배송 과정 중 기상 악화 및 도로교통 상황에 따라 부득이하게 지연 배송이 발생될 수 있습니다.</p>
            </div>
        </div>
    );
}


export default Detail;