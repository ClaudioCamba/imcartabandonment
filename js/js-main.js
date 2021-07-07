//  Replace JavaScript code in script tag here with your test JavaScript code 

// Add tracking and links overlay 
var getCTA, getAccordian, getLink;

function addTrackingLinks() {
    jQuery(".ca-product-cta").addClass("addlinks");
    jQuery('<div class="close_cta tooltip"></div>').insertAfter(".ca-close");
    jQuery('<div class="review-tip linktip"></div>').insertAfter(".review-logo");
    jQuery('<div class="review-tip-finance linktip"></div>').insertAfter(".ca-icon-finance img");
    jQuery('<div class="review-tip-returns linktip2"></div>').insertAfter(".ca-icon-returns img");
    jQuery('<div class="review-tip-delivery linktip3"></div>').insertAfter(".ca-icon-delivery img");
    jQuery('<label class="tooltiptext addTrackingText">[Click Me] Add Tracking</label>').appendTo(".tooltip");
    jQuery('<label class="tooltiptext addLinkText">[Click Me] Add Links & Tracking</label>').appendTo(".addlinks");
    jQuery('<label class="tooltiptext addLink">[Click Me] Change image</label>').appendTo(".linktip");
    jQuery('<label class="tooltiptext addLink">[Click Me] Change image</label>').appendTo(".linktip2");
    jQuery('<label class="tooltiptext addLink">[Click Me] Change image</label>').appendTo(".linktip3");

    /* Evenet Handler for tracking/links pop up */
    jQuery(".tooltiptext.addTrackingText").on("click", function() {
        getAccordian = jQuery(this).parent();
        jQuery('.tracking-container').show();
    });
    jQuery(".tooltiptext.addLinkText").on("click", function() {
        getCTA = jQuery(this).parent();
        jQuery('.editLink-container').show();
    });
    jQuery(".review-tip .tooltiptext.addLink").on("click", function() {
        getLink = jQuery(this).parent();
        jQuery('.link-container').show();
    });
    jQuery(".review-tip-finance .tooltiptext.addLink").on("click", function() {
        getLink = jQuery(this).parent();
        jQuery('.link-container').show();
    });
    jQuery(".review-tip-returns .tooltiptext.addLink").on("click", function() {
        getLink = jQuery(this).parent();
        jQuery('.link-container').show();
    });
    jQuery(".review-tip-delivery .tooltiptext.addLink").on("click", function() {
        getLink = jQuery(this).parent();
        jQuery('.link-container').show();
    });
}
addTrackingLinks();

/* Additional Input field functionality */
function addInputLightBox() {
    /* Event Handlers for Lightbox Edit Link */
    jQuery(".editLink-container .save-btn").on("click", function() {
        jQuery('.editLink-container').hide();
        jQuery(getCTA).attr({
            //"data-href-link": jQuery(".editLink-container .get-link").val(),
            "data-aa-event": jQuery(".editLink-container .get-event").val(),
            "data-aa-evar": jQuery(".editLink-container .get-evar").val(),
            "data-aa-evar-desc": jQuery(".editLink-container .get-evar-desc").val()
        });
        jQuery(getCTA).contents()[0].textContent = jQuery(".editLink-container .get-text").val() != "" ? jQuery(".editLink-container .get-text").val() : "Complete Order";
    });
    jQuery(".editLink-container .cancel-btn").on("click", function() {
        jQuery('.editLink-container').hide();
    });

    /* Event Handlers for Lightbox Tracking */
    jQuery(".tracking-container .save-btn").on("click", function() {
        jQuery('.tracking-container').hide();
        //jQuery(getAccordian).contents()[1].textContent = jQuery(".tracking-container .get-text").val() != "" ? jQuery(".tracking-container .get-text").val() : "Screen";
        //jQuery(getAccordian).text(jQuery(".tracking-container .get-text").val() != "" ? jQuery(".tracking-container .get-text").val() : "Screen");
        jQuery(getAccordian).attr({
            //"data-href-link": jQuery(".editLink-container .get-link").val(),
            "data-aa-event": jQuery(".tracking-container .get-event").val(),
            "data-aa-evar": jQuery(".tracking-container .get-evar").val(),
            "data-aa-evar-desc": jQuery(".tracking-container .get-evar-desc").val()
        });
    });
    jQuery(".tracking-container .cancel-btn").on("click", function() {
        jQuery('.tracking-container').hide();
    });

    /* Event Handlers for Lightbox image links */
    jQuery(".link-container .save-btn").on("click", function() {
        jQuery('.link-container').hide();
        if (jQuery(".link-container .get-link").val() != "" && jQuery(getLink).hasClass("review-tip")) {
            jQuery(getLink).attr("src", jQuery(".link-container .get-link").val());
            if (jQuery(getLink).attr("src").indexOf("www.") > -1 || jQuery(getLink).attr("src").indexOf("https://") > -1 || jQuery(getLink).attr("src").indexOf("http://") > -1 || jQuery(getLink).attr("src").indexOf("//image") > -1) {
                jQuery(".review-logo").attr("src", jQuery(".link-container .get-link").val());
                jQuery(".ca-vertical-line").removeClass("noshow").addClass("yoshow");
            } else {
                jQuery(".review-logo").attr("src", "");
                jQuery(".ca-vertical-line").removeClass("yoshow").addClass("noshow");
            }
        } else if (jQuery(".link-container.finance .get-link").val() != "" && jQuery(getLink).hasClass("review-tip-finance")) {
            jQuery(getLink).attr("src", jQuery(".link-container .get-link").val());
            if (jQuery(getLink).attr("src").indexOf("www.") > -1 || jQuery(getLink).attr("src").indexOf("https://") > -1 || jQuery(getLink).attr("src").indexOf("http://") > -1 || jQuery(getLink).attr("src").indexOf("//image") > -1) {
                jQuery(".ca-icon-finance img").attr("src", jQuery(".link-container .get-link").val());
            } else {
                jQuery(".ca-icon-finance img").attr("src", "");
            }

        } else if (jQuery(".link-container.delivery .get-link").val() != "" && jQuery(getLink).hasClass("review-tip-delivery")) {
            jQuery(getLink).attr("src", jQuery(".link-container .get-link").val());
            if (jQuery(getLink).attr("src").indexOf("www.") > -1 || jQuery(getLink).attr("src").indexOf("https://") > -1 || jQuery(getLink).attr("src").indexOf("http://") > -1 || jQuery(getLink).attr("src").indexOf("//image") > -1) {
                jQuery(".ca-icon-delivery img").attr("src", jQuery(".link-container .get-link").val());
            } else {
                jQuery(".ca-icon-delivery img").attr("src", "");
            }

        } else if (jQuery(".link-container.returns .get-link").val() != "" && jQuery(getLink).hasClass("review-tip-returns")) {
            jQuery(getLink).attr("src", jQuery(".link-container .get-link").val());
            if (jQuery(getLink).attr("src").indexOf("www.") > -1 || jQuery(getLink).attr("src").indexOf("https://") > -1 || jQuery(getLink).attr("src").indexOf("http://") > -1 || jQuery(getLink).attr("src").indexOf("//image") > -1) {
                jQuery(".ca-icon-returns img").attr("src", jQuery(".link-container .get-link").val());
            } else {
                jQuery(".ca-icon-returns img").attr("src", "");
            }

        }
    });
    jQuery(".link-container .cancel-btn").on("click", function() {
        jQuery('.link-container').hide();
    });
}
addInputLightBox();

function addEditableClass() {
    jQuery(".test-code").find("h5, h4, h3, h2, h1, p, span, strong").addClass("edit").attr("contenteditable", "true");
    jQuery(".test-code").find(".ca-product-cta, .ca-product-txt, .ca-product-price").removeClass("edit").removeAttr("contenteditable");
    jQuery(".test-code a").removeAttr("href");

    /* Find all content editable fields and change the way text is pasted into them */
    for (var i = 0; i < jQuery(".edit").length; i++) {
        jQuery(".edit")[i].addEventListener("paste", function(e) {
            e.preventDefault();
            var text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);
        });
    }

    jQuery(".edit").on('keydown', function(e) {
        if (e.keyCode == 13 || e.keyCode == 13 && e.shiftKey == true) {
            e.preventDefault();
            document.execCommand("insertLineBreak");
        }
    });
}
addEditableClass();

/* Your test styling if in style tags needs to be added here within the brackets */
var s = `<style type="text/css">
.removed {
overflow: hidden !important;
max-height: 0 !important;
transition: max-height 0.5s ease-in-out !important;
}

.ca-container {
text-align: left;
box-sizing: border-box;
border: 1px solid #E8E8E8;
background-color: #FFFFFF;
box-shadow: 0 3px 28px 0 rgba(0,0,0,0.06);
position: relative;
}
.ca-container .ca-wrap-reviews {
vertical-align: top;
display: inline-block;
width: 46%;
}
.ca-container .ca-review {
text-align: left;
}
.ca-container .ca-review-txt {
color: #2E2C2B;
font-family: "SamsungSharpSans",arial;
font-weight: bold;
letter-spacing: -0.17px;
}
.ca-container .ca-wrap-reviews img.review-logo {
width: auto;
display: inline-block;
vertical-align: middle;
}
.ca-container .ca-vertical-line {
box-sizing: border-box;
width: 3px;
border: 1px solid #EEEEEE;
vertical-align: middle;
}
.ca-container .ca-review-desc {
color: #2E2C2B;
font-family: "SamsungOne",arial;
letter-spacing: -0.23px;
display: inline-block;
vertical-align: middle;
}
.ca-container .ca-line {
display: block;
height: 1px;
background-color: rgba(46,44,43,0.1);
}
.ca-container .ca-icons {
display: inline-block;
}
.ca-container .ca-icon-delivery {
display: inline-block;
width: auto;
}
.ca-container .ca-icon-delivery img {
display: inline-block;
/*width: 25%;*/
vertical-align: middle;
}
.ca-container .ca-icon-delivery h2 {
display: inline-block;
color: #000000;
font-family: "SamsungOne",arial;
vertical-align: middle;
font-weight: 500;
}
.ca-container .ca-icon-returns {
width: auto;
display: inline-block;
}
.ca-container .ca-icon-returns img {
display: inline-block;
/*width: 25%;*/
height: auto;
vertical-align: middle;
}
.ca-container .ca-icon-returns h2 {
display: inline-block;
color: #000000;
font-family: "SamsungOne",arial;
vertical-align: middle;
font-weight: 500;
}
.ca-container .ca-icon-finance {
display: inline-block;
width: auto;
}
.ca-container .ca-icon-finance img {
display: inline-block;
/*width: 21%;*/
height: auto;
vertical-align: middle;
}
.ca-container .ca-icon-finance h2 {
display: inline-block;
color: #000000;
font-family: "SamsungOne",arial;
vertical-align: middle;
font-weight: 500;
}
.ca-container .ca-wrap-product {
display: flex;
justify-content: center;
align-items: center;
width: 53%;
vertical-align: top;
}
.ca-container .ca-wrap-product .ca-product-img {
margin: 0;
width: auto;
height: auto;
max-width: 225px;
max-height: 175px;
display: inline-block;
vertical-align: top;
}
.ca-container .ca-product {
display: inline-block;
vertical-align: top;
}
.ca-container .ca-product-info {
display: inline-block;
vertical-align: middle;
width: 45%;
margin-left: 15px;
}
.ca-container .ca-product-info h2.ca-product-txt {
color: #000000;
font-family: "SamsungSharpSans",arial;
font-weight: bold;
}
.ca-container .ca-product-info h2.ca-product-price {
color: #000000;
font-family: "SamsungOne",arial;
}
.ca-container .ca-product-cta-wrap {
border-radius: 100px;
background-color: #1428A0;
display: inline-block;
vertical-align: middle;
width: auto;
max-width: 265px;
}
.ca-container .ca-product-cta-wrap a {
color: #FFFFFF;
font-family: "SamsungOne",arial;
letter-spacing: 1px;
text-align: center;
text-transform: uppercase;
font-weight: 800;
display: inline-block;
white-space: nowrap;
vertical-align: middle;
}
.ca-container .ca-product-cta-wrap:hover {
cursor: pointer;
background-color: #0d1752;
}
.ca-container .ca-close {
position: absolute;
z-index: 999;
}
.ca-container .ca-close:hover {
cursor: pointer;
}
.noshow {
display: none !important;
}
.yoshow {
display: inline;
}
@media only screen and (min-width:1440px) {
.ca-container {
max-width: 1386px;
margin: 27px auto;
max-height: 600px;
}
.ca-container .ca-wrap {
margin: 20px 20px 20px 52px;
display: flex;
justify-content: space-between;
align-items: center;
}
.ca-container .ca-review-txt {
font-size: 22px;
line-height: 27px;
margin-bottom: 15px;
}
.ca-container .ca-wrap-reviews img.review-logo {
max-height: 40px;
}
.ca-container .ca-vertical-line {
height: 22px;
margin: 0 14px 0 27px;
}
.ca-container .ca-review-desc {
font-size: 16px;
line-height: 33px;
}
.ca-container .ca-line {
width: 100%;
margin: 10px 0 14px;
}
.ca-container .ca-icon-delivery, .ca-container .ca-icon-returns {
margin-right: 10px;
}
.ca-container .ca-icon-delivery img, .ca-container .ca-icon-returns img, .ca-container .ca-icon-finance img {
width: 40px;
}
/*.ca-container .ca-icon-delivery {
width: 200px;
}*/
.ca-container .ca-icon-delivery h2 {
font-size: 14px;
line-height: 19px;
}
/*.ca-container .ca-icon-returns {
width: 200px;
}*/
.ca-container .ca-icon-returns h2 {
font-size: 14px;
line-height: 19px;
}
/*.ca-container .ca-icon-finance {
width: 239px;
}*/
.ca-container .ca-icon-finance h2 {
font-size: 14px;
line-height: 19px;
}
.ca-container .ca-product {
margin: 0;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 520px;
}
.ca-container .ca-product-info h2.ca-product-txt {
font-size: 24px;
line-height: 28px;
margin-bottom: 14px;
}
.ca-container .ca-product-info img {
width: 97px;
}
.ca-container .ca-product-info h2.ca-product-price {
font-size: 22px;
line-height: 28px;
margin-top: 14px;
}
.ca-container .ca-product-cta-wrap {
height: 44px;
width: auto;
/*width: 177px;*/
margin-left: 15px;
}
.ca-container .ca-product-cta-wrap a {
font-size: 12px;
line-height: 24px;
padding: 10px 15px;
}
.ca-container .ca-close {
width: 30px;
top: 5px;
right: 5px;
}
}
@media only screen and (min-width:769px) and (max-width: 1439px) {
.ca-container .ca-wrap-product .ca-product-img {
max-width: 15vw;
max-height: 13vw;
}
.ca-container {
max-width: 96.25vw;
margin: 1.875vw auto;
max-height: 600px;
}
.ca-container .ca-wrap {
margin: 1.7361vw 1.7361vw 1.7361vw 3.7777vw;
display: flex;
justify-content: space-between;
align-items: center;
}
.ca-container .ca-review-txt {
font-size: 1.527vw;
line-height: 1.875vw;
margin-bottom: 1.0416vw;
}
.ca-container .ca-wrap-reviews img.review-logo {
max-height: 2.77vw;
}
.ca-container .ca-vertical-line {
height: 1.527vw;
margin: 0 0.972vw 0 1.875vw;
}
.ca-container .ca-review-desc {
font-size: 1.11vw;
line-height: 2.2916vw;
}
.ca-container .ca-line {
width: 38.194vw;
margin: 0.694vw 0 0.972vw;
}
.ca-container .ca-icon-delivery, .ca-container .ca-icon-returns {
margin-right: 0.694vw;
}
.ca-container .ca-icon-delivery img, .ca-container .ca-icon-returns img, .ca-container .ca-icon-finance img {
width: 2.77vw;
}
/*.ca-container .ca-icon-delivery {
width: 13.88vw;
}*/
.ca-container .ca-icon-delivery h2 {
font-size: 0.972vw;
line-height: 1.3194vw;
}
/*.ca-container .ca-icon-returns {
width: 13.88vw;
}*/
.ca-container .ca-icon-returns h2 {
font-size: 0.972vw;
line-height: 1.3194vw;
}
/*.ca-container .ca-icon-finance {
width: 16.5972vw;
}*/
.ca-container .ca-icon-finance h2 {
font-size: 0.972vw;
line-height: 1.3194vw;
}

.ca-container .ca-product {
margin-left: 1vw;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
}
.ca-container .ca-product-info h2.ca-product-txt {
font-size: 1.66vw;
line-height: 1.94vw;
margin-bottom: 0.972vw;
}
.ca-container .ca-product-info img {
width: 6.7361vw;
}
.ca-container .ca-product-info h2.ca-product-price {
font-size: 1.527vw;
line-height: 1.94vw;
margin-top: 0.972vw;
}
.ca-container .ca-product-cta-wrap {
height: 3.05vw;
/*width: 12.2916vw;*/
/*margin-left: 5.2083vw;*/
max-width: 18.4027vw;
margin-left: 1vw;
}
.ca-container .ca-product-cta-wrap a {
font-size: 0.73vw;
line-height: 1.66vw;
padding: 0.694vw 1.0416vw;
}
.ca-container .ca-close {
width: 2.083vw;
top: 0.3472vw;
right: 0.3472vw;
}
}

@media only screen and (max-width:768px) {
.ca-container {
margin: 7.249vw 8.75vw;
height: auto;
/* max-height: 1000px;*/
}
.ca-container .ca-wrap {
margin: 10.5vw 5.25vw 0;
}
.ca-container .ca-wrap-reviews {
width: 100%;
display: block;
margin-bottom: 5vw;
}
.ca-container .ca-review {
text-align: center;
}
.ca-container .ca-wrap-reviews img.review-logo {
width: auto;
max-height: 10vw;
display: block;
margin: 0 auto 3.75vw;
}
.ca-container .ca-review-txt {
font-size: 5vw;
line-height: 5.75vw;
margin-bottom: 2.5vw;
}
.ca-container .ca-vertical-line {
display: none;
}
.ca-container .ca-review-desc {
color: #6E6A69;
font-size: 3vw;
letter-spacing: -0.13px;
line-height: 5.75vw;
}
.ca-container .ca-line {
display: none;
}
.ca-container .ca-icons {
display: none;
}
.ca-container .ca-wrap-product {
display: block;
width: 100%;
text-align: center;
}
.ca-container .ca-wrap-product .ca-product-img {
margin: 0 auto;
width: auto;
display: block;
max-height: unset;
max-width: 90%;
}
.ca-container .ca-product {
margin: 5vw auto 9.5vw;
display: block;
}
.ca-container .ca-product-info {
display: block;
width: unset;
margin-left: 0;
}
.ca-container .ca-product-info h2.ca-product-txt {
font-size: 4vw;
line-height: 4.75vw;
margin-bottom: 2.75vw;
}
.ca-container .ca-product-info h2.ca-product-price {
font-size: 4vw;
line-height: 4.75vw;
margin: 1.750vw 0 4vw;
}
.ca-container .ca-product-info img {
width: 31%;
}
.ca-container .ca-product-cta-wrap {
/*width: 42.5vw;*/
max-width: unset;
width: auto;
margin: 0 auto;
/*display: block;*/
overflow: hidden;
display: inline-block;
padding: 2.5vw 5vw;
}
.ca-container .ca-product-cta-wrap a {
font-size: 3vw;
line-height: 6vw;
/*padding: 2.5vw;*/
}
.ca-container .ca-close {
width: 6.25vw;
top: 3.75vw;
right: 3.75vw;
}

}
</style>`;
//jQuery(s).appendTo("head");

/* Keep this function for copying the code block */
function copied() {
    const el = jQuery(".code-block");
    el.select();
    document.execCommand('copy');
}
/* Keep this function for generating the code but change the values to suit your test */
function submission() {
    var cleanHTML;

    /* Add Tracking & HREF for CTA's */
    var getEvent, getEVar, getEVarDesc, getEVarDescClose;
    for (var t = 0; t < jQuery(".test-code .ca-product-cta-wrap a").length; t++) {
        if (jQuery(".test-code .ca-product-cta").eq(t).attr("data-aa-event") != null) {
            getEvent = jQuery(".test-code .ca-product-cta-wrap a").eq(t).attr("data-aa-event");
        } else {
            getEvent = "48";
        }
        if (jQuery(".test-code .ca-product-cta").eq(t).attr("data-aa-evar") != null) {
            getEVar = jQuery(".test-code .ca-product-cta").eq(t).attr("data-aa-evar");
        } else {
            getEVar = "48";
        }
        if (jQuery(".test-code .ca-product-cta").eq(t).attr("data-aa-evar-desc") != null) {
            getEVarDesc = jQuery(".test-code .ca-product-cta").eq(t).attr("data-aa-evar-desc");
        } else {
            getEVarDesc = "home:cluster0_cartabandonment_banner_complete order";
        }
        if (jQuery(".test-code .close_cta").eq(t).attr("data-aa-evar-desc") != null) {
            getEVarDescClose = jQuery(".test-code .close_cta").eq(t).attr("data-aa-evar-desc");
        } else {
            getEVarDescClose = "home:cluster0_cartabandonment_banner_close";
        }
    }

    /* Clean up the entire HTML before getting ready to push it into Code Block */
    jQuery(".test-code").find("h5, h4, h3, h2, h1, p, span, strong").removeClass("edit").removeAttr("contenteditable");
    jQuery('.tooltiptext.addTrackingText, .tooltiptext.addLinkText, .close_cta.tooltip, .review-tip.linktip, .review-tip-finance.linktip, .review-tip-returns.linktip2, .review-tip-delivery.linktip3').remove();
    jQuery(".ca-product-cta").removeClass("addlinks");

    var changeAllThis = "h2, a, p, span, strong, h1, h3";
    for (var a = 0; a < jQuery(changeAllThis).length; a++) {
        if (jQuery(changeAllThis).eq(a).text().indexOf("'") > -1) {
            jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/[']/g, "’"));
        }
        if (jQuery(changeAllThis).eq(a).text().indexOf('"') > -1) {
            jQuery(changeAllThis).eq(a).text(jQuery(changeAllThis).eq(a).text().replace(/["]/g, "“"));
        }
    }

    /* HTML Code block final changes */
    jQuery(".ca-product-txt").text("'+pName+'");
    jQuery(".ca-product-price").text("'+product[pCheck].price+'");
    jQuery(".ca-product-cta").attr("href", "'+ctaLink+'");
    jQuery(".ca-product-img").attr({
        "src": "'+ptargetThumbnail+'",
        "data-src-pc": "'+ptargetThumbnail+'",
        "data-src-mobile": "'+ptargetThumbnail+'"
    });

    cleanHTML = jQuery(".test-code").html();

    jQuery(".ca-product-txt").text(cName);
    jQuery(".ca-product-price").text(cPrice);
    jQuery(".ca-product-cta").removeAttr("href");
    jQuery(".ca-product-img").attr("src", "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-ultra-5g-g988-sm-g998bzkdeua-368887916?$PD_GALLERY_PNG$")

    addEditableClass(); //turn content editable back on
    addTrackingLinks(); //turn tracking/links pop up back on

    /* Your test javascript code if any needs to be added here within the brackets */
    var c = `<script type="text/javascript">
        // function to send analytics data
        function sendData(data) {
        s.linkTrackVars="eVar` + getEVar + `,events";
        s.events="event` + getEvent + `";
        s.eVar` + parseInt(getEVar) + ` = data;
        s.tl(this,'o');
        }
        holdAll();
        function holdAll(){
        function allForOne(){
        var product = JSON.parse('$` + `{user.cart_check}'),
        pCheck = 0,
        pName = product[0].name,
        ptargetThumbnail = product[0].imgs,
        ctaCopy = "` + jQuery(".ca-product-cta").contents()[0].textContent.trim() + `",
        ctaLink = product[0].cartURL;

        pName = pName.replace('_','"');

        for(var a = 0; a < product.length; a++){
        if(product[a].id.indexOf("SM-G988") > -1 || product[a].id.indexOf("SM-G986") > -1 || product[a].id.indexOf("SM-G981") > -1 || product[a].id.indexOf("SM-G980") > -1){
        pCheck = a;
        }
        if(product[a].id.indexOf("SM-G988") > -1){
        pName = "Galaxy S20 Ultra 5G";
        }else if(product[a].id.indexOf("SM-G986") > -1){
        pName = "Galaxy S20+ 5G";
        }else if(product[a].id.indexOf("SM-G981") > -1){
        pName = "Galaxy S20 5G";
        }else if(product[a].id.indexOf("SM-G980") > -1){
        pName = "Galaxy S20";
        }
        }

        /* Price cleanup */
        var temp = Math.round(product[pCheck].price).toString(),
        position,
        dot = ".",
        space = " ",
        comma = ",",
        output;

        //SEI
        if(product[pCheck].price.indexOf("€") < 0 && (window.location.pathname.indexOf("/it/") > -1 || window.location.pathname.indexOf("/es/") > -1)){
        if(temp.length > 3){
        position = 1;
        output = [temp.slice(0, position), dot, temp.slice(position)].join('');
        product[pCheck].price = output+", 00 €";
        }else if(temp.length < 4){
        product[pCheck].price = Math.round(product[pCheck].price)+", 00 €";
        }
        }
        //SENA (se/dk/no)
        if(product[pCheck].price.indexOf("kr") < 0 && (window.location.pathname.indexOf("/se/") > -1 || window.location.pathname.indexOf("/dk/") > -1 || window.location.pathname.indexOf("/no/") > -1)){
        if(temp.length > 4){
        position = 2;
        }else if(temp.length > 3){
        position = 1;
        }
        output = [temp.slice(0, position), space, temp.slice(position)].join('');
        product[pCheck].price = output+" kr";
        }
        //SENA (fi)
        if(product[pCheck].price.indexOf("€") < 0 && window.location.pathname.indexOf("/fi/") > -1){
        if(temp.length > 3){
        position = 1;
        }else{
        position = 0;
        }
        output = [temp.slice(0, position), space, temp.slice(position)].join('');
        product[pCheck].price = output+", 00 €";
        }
        //UAE
        if(temp.indexOf("AED") < 0 && window.location.pathname.indexOf("/ae/") > -1){
        if(temp.length > 3){
        position = 1;
        output = [temp.slice(0, position), comma, temp.slice(position)].join('');
        product[pCheck].price = output+".00 AED";
        }else if(temp.length < 4){
        product[pCheck].price = Math.round(product[pCheck].price)+", 00 €";
        }
        }

        var a = '` + cleanHTML.trim().replace(/\s+/g, ' ') + `';

        jQuery(a).prependTo('#content');

        /* Click Events */
        jQuery(".ca-product-cta").on("click", function(){
        sendData("` + getEVarDesc + `");
        });
        jQuery(".ca-close").on("click", function(){
        //jQuery(".ca-container").remove();
        jQuery(".ca-container").addClass("removed");
        setTimeout(function(){jQuery(".ca-container").remove()},500);
        sendData("` + getEVarDescClose + `");
        });

        /* Responsive Controls */
        var mql = window.matchMedia("(max-width: 768px)");
        mql.addListener(function(e){
        if(e.matches){
        /* mobile */
        mobile();
        }else{
        /* desktop */
        desktop();
        }
        });

        if(window.innerWidth <= 768){
        /* mobile */
        mobile();
        }else{
        /* desktop */
        desktop();
        };

        var pznSmallImg = document.querySelector(".ca-product-img");
        if(product[0].imgs==undefined){

        // replace error Images --------------------------------------
        var pznMob = [
        /* Z Flip*/ ['SM-F700','https://images.samsung.com/is/image/samsung/uk/galaxy-s20/gallery/uk-galaxy-z-flip-sm-f700-sm-f700fzkdbtu-frontmirrorblack-209048059?$PD_GALLERY_PNG$'],
        /* Fold */ ['SM-F900','https://images.samsung.com/is/image/samsung/uk-galaxy-fold-sm-f907-5g-sm-f907bzkabtu-frontblack-thumb-183263244?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* S20 */ ['SM-G981','SM-G980','https://images.samsung.com/is/image/samsung/uk-galaxy-s20-sm-g981-5g-sm-g981bzadeua-frontcosmicgray-thumb-214107767?$PF_PRD_PNG$'],
        /* S20 Plus */ ['SM-G986','SM-G985','https://images.samsung.com/is/image/samsung/uk-galaxy-s20-plus-sm-g986-5g-sm-g986bzadeua-frontcosmicgray-thumb-214107393?$PF_PRD_PNG$'],
        /* S20 Ultra*/ ['SM-G988','https://images.samsung.com/is/image/samsung/uk-galaxy-s20-ultra-sm-g988-5g-sm-g988bzkdeua-frontcosmicblack-thumb-214107294?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* S10 Lite */ ['SM-G770','https://images.samsung.com/is/image/samsung/uk-galaxy-s10-lite-sm-g770-sm-g770fzkdbtu-frontprismblack-thumb-206094093?$PF_PRD_PNG$'],
        /* S10 5G */ ['SM-G977','https://images.samsung.com/is/image/samsung/uk-galaxy-s10-sm-g977-5g-sm-g977bzaabtu-thumb-185487623?$PF_PRD_PNG$'],
        /* S10 Plus */ ['SM-G975','https://images.samsung.com/is/image/samsung/uk-galaxy-s10plus-sm-g975-hybrid-sim-sm-g975fzgdbtu-frontprismgreen-thumb-146852126?$PF_PRD_PNG$'],
        /* S10 */ ['SM-G973','https://images.samsung.com/is/image/samsung/uk-galaxy-s10-sm-g973-hybrid-sim-sm-g973fzbdbtu-frontprismblue-thumb-156199775?$PF_PRD_PNG$'],
        /* S10E */ ['SM-G970','https://images.samsung.com/is/image/samsung/uk-galaxy-s10e-sm-g970-hybrid-sim-sm-g970fzsdbtu-frontprismsilver-thumb-188191346?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* Note10 Lite */ ['SM-N770','https://images.samsung.com/is/image/samsung/uk-galaxy-note10-lite-sm-n770-sm-n770fzkdbtu-frontaurablack-thumb-206093831?$PF_PRD_PNG$'],
        /* Note10 Plus 5G */ ['SM-N976','https://images.samsung.com/is/image/samsung/uk-galaxy-note10-plus-256gb-sm-n976-5g-sm-n976bzsabtu-frontauraglow-thumb-177815230?$PF_PRD_PNG$'],
        /* Note10 Plus */ ['SM-N975','https://images.samsung.com/is/image/samsung/uk-galaxy-note10-plus-sm-n975-sm-n975fzsdbtu-frontauraglow-thumb-177815055?$PF_PRD_PNG$'],
        /* Note10 */ ['SM-N970','https://images.samsung.com/is/image/samsung/uk-galaxy-note10-sm-n970-sm-n970fzkdbtu-frontaurablack-thumb-177814907?$PF_PRD_PNG$'],
        /* Note9 */ ['SM-N960','https://images.samsung.com/is/image/samsung/uk-galaxy-note9-sm-n960-single-sim-sm-n960fzkabtu-frontblack-thumb-117163147?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* A90 5G */ ['SM-A908','https://images.samsung.com/is/image/samsung/uk-galaxy-a90-5g-sm-a908bzkabtu-black-thumb-224635430?$PF_PRD_PNG$'],
        /* A80 */ ['SM-A805','https://images.samsung.com/is/image/samsung/uk-galaxy-a80-sm-a805fzkdbtu-frontblack-thumb-181284726?$PF_PRD_PNG$'],
        /* A71 */ ['SM-A715','https://images.samsung.com/is/image/samsung/uk-galaxy-a71-sm-a715fzkubtu-front-thumb-206094634?$PF_PRD_PNG$'],
        /* A70 */ ['SM-A705','https://images.samsung.com/is/image/samsung/fi-galaxy-a705-a70-sm-a705fzkunee-frontblack-thumb-166200275?$PF_PRD_PNG$'],
        /* A51 */ ['SM-A515','https://images.samsung.com/is/image/samsung/uk-galaxy-a51-sm-a515fzkveua-front-thumb-206094240?$PF_PRD_PNG$'],
        /* A50 */ ['SM-A505','https://images.samsung.com/is/image/samsung/fi-galaxy-a505-a50-sm-a505fzksnee-frontblack-thumb-166002658?$PF_PRD_PNG$'],
        /* A41 */ ['SM-A415','https://images.samsung.com/is/image/samsung/uk-galaxy-a41-sm-a415fzkdeua-front-246140763?$PD_GALLERY_PNG$'],
        /* A40 */ ['SM-A405','https://images.samsung.com/is/image/samsung/uk-galaxy-a40-sm-a405fzkdbtu-frontblack-thumb-181275569?$PF_PRD_PNG$'],
        /* A30S */ ['SM-A307','https://images.samsung.com/is/image/samsung/es-galaxy-a30s-sm-a307fzkvphe-front-thumb-182236947?$PF_PRD_PNG$'],
        /* A30 */ ['SM-A305','https://images.samsung.com/is/image/samsung/levant-galaxy-a30-a305-sm-a305fzkfmid-frontblack-151867641?$PD_GALLERY_L_JPG$'],
        /* A20E */ ['SM-A202','https://images.samsung.com/is/image/samsung/uk-galaxy-a20e-sm-a202fzkdbtu-frontblack-thumb-181275712?$PF_PRD_PNG$'],
        /* A10 */ ['SM-A105','https://images.samsung.com/is/image/samsung/it-galaxy-a10-a105-sm-a105fzbuitv-frontblue-thumb-196116138?$PF_PRD_PNG$'],
        /* A6 */ ['SM-A600','https://images.samsung.com/is/image/samsung/it-galaxy-a6-a600fd-sm-a600fzknitv-frontblack-thumb-104810266?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* M21 */ ['SM-M215','https://images.samsung.com/is/image/samsung/nl-galaxy-m21-sm-m215fzkuphn-frontblack-232410414?$PD_GALLERY_PNG$'],
        /* M20 */ ['SM-M205','https://images.samsung.com/is/image/samsung/it-galalxy-m20-m205-sm-m205fdawitv-frontebonyblack-thumb-151123424?$PF_PRD_PNG$'],
        /* M30 */ ['SM-M307','https://images.samsung.com/is/image/samsung/it-galaxy-m30s-m307-sm-m307fzkuitv-frontblack-thumb-184095908?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* Tab S6 LTE 10.5*/ ['SM-T865','https://images.samsung.com/is/image/samsung/uk-galaxy-tab-s6-4g-128gb-sm-t865nzaabtu-frontgray-thumb-177241292?$PF_PRD_PNG$'],
        /* Tab S6 WIFI 10.5*/ ['SM-T860','https://images.samsung.com/is/image/samsung/uk-galaxy-tab-s6-128gb-sm-t860nzaabtu-frontgray-thumb-177241138?$PF_PRD_PNG$'],
        /* Tab S6 Lite LTE 10.4*/ ['SM-P615','https://images.samsung.com/is/image/samsung/uk-galaxy-tab-s6-lite-4g-sm-p615nzaabtu-frontgray-thumb-229910808?$PF_PRD_PNG$'],
        /* Tab S6 Lite WIFI 10.4*/ ['SM-P610','https://images.samsung.com/is/image/samsung/uk-galaxy-tab-s6-lite-sm-p610nzbabtu-frontblue-thumb-229592181?$PF_PRD_PNG$'],
        /* Tab S5E LTE 10.5*/ ['SM-T725','https://images.samsung.com/is/image/samsung/uk-galaxy-tabs5e-4g-sm-t725nzkabtu-frontblack-thumb-144907370?$PF_PRD_PNG$'],
        /* Tab S5E WIFI 10.5*/ ['SM-T720','https://images.samsung.com/is/image/samsung/uk-galaxy-tabs5e-sm-t720nzkabtu-frontblack-thumb-144907277?$PF_PRD_PNG$'],
        /* Tab S4 WIFI 10.5*/ ['SM-T835','https://images.samsung.com/is/image/samsung/uk-galaxy-tabs4-t835-sm-t835nzkabtu-black-thumb-Black-118863026?$PF_PRD_PNG$'],
        /* Tab S4 LTE 10.5*/ ['SM-T830','https://images.samsung.com/is/image/samsung/uk-galaxy-tabs4-t830-sm-t830nzkabtu-black-thumb-Black-118858351?$PF_PRD_PNG$'],
        /* Tab A WIFI 8*/ ['SM-T290','https://images.samsung.com/is/image/samsung/it-galaxy-tab-a-t290-sm-t290nzkaitv-frontblack-thumb-175821163?$PF_PRD_PNG$'],
        /* Tab A LTE 8*/ ['SM-T295','https://images.samsung.com/is/image/samsung/it-galaxy-taba-t295-sm-t295nzkaitv-frontblack-thumb-186507205?$PF_PRD_PNG$'],
        /* Tab A WIFI 10.5*/ ['SM-T590','https://images.samsung.com/is/image/samsung/it-galaxy-taba-t590-sm-t590nzkaitv-frontblack-thumb-193154350?$PF_PRD_PNG$'],
        /* Tab A LTE 10.5*/ ['SM-T595','https://images.samsung.com/is/image/samsung/it-galaxy-taba-t595-sm-t595nzkaitv-frontblack-thumb-193164324?$PF_PRD_PNG$'],
        /* Tab A WIFI 10.1*/ ['SM-T510','https://images.samsung.com/is/image/samsung/it-galaxy-tab-a-t510-sm-t510nzkditv-frontblack-thumb-171730530?$PF_PRD_PNG$'],
        /* Tab A LTE 10.1*/ ['SM-T515','https://images.samsung.com/is/image/samsung/it-galaxy-tab-a-t515-sm-t515nzkditv-frontblack-thumb-196085935?$PF_PRD_PNG$'],
        /* Tab Active2 LTE 9.7*/ ['SM-T819','SM-T813','https://images.samsung.com/is/image/samsung/es-galaxy-tab-s2-9-7-t819-sm-t819nzkephe-000000001-front-black-thumb?$PF_PRD_PNG$'],
        /*------------------------------------------------------------------*/
        /* GW Active2 BT 40Black */ ['SM-R830','https://images.samsung.com/is/image/samsung/es-galaxy-watch-active-r830nz-sm-r830nzkaphe-frontblack-thumb-216635017?$PF_PRD_PNG$'],
        /* GW Active2 BT 40Silver */ ['SM-R835','https://images.samsung.com/is/image/samsung/es-galaxy-watch-active2-r835fs-sm-r835fssaphe-frontsilver-thumb-227140240?$PF_PRD_PNG$'],
        /* GW Active2 BT 44Black */ ['SM-R820','https://images.samsung.com/is/image/samsung/es-galaxy-watch-active2-r820ns-sm-r820nskaphe-frontblack-thumb-214904920?$PF_PRD_PNG$'],
        /* Galaxy Buds Plus */ ['SM-R175','https://images.samsung.com/is/image/samsung/nl/galaxy-s20/gallery/nl-galaxy-budsplus-sm-r175nzwaeu2-frontwhite-209031341?$PD_GALLERY_PNG$'],
        /* Galaxy Buds */ ['SM-R170','https://images.samsung.com/is/image/samsung/es-galaxy-buds-r170-sm-r170nzkaphe-frontblack-thumb-145993846?$PF_PRD_PNG$'],
        /* Galaxy Fit */ ['SM-R370','https://images.samsung.com/is/image/samsung/es-galaxy-fit-sm-r370nzkaphe-frontblack-thumb-167504925?$PF_PRD_PNG$'],
        /* Galaxy Fit e */ ['SM-R375','https://images.samsung.com/is/image/samsung/es-galaxy-fite-sm-r375nzkaphe-frontblack-thumb-167568895?$PF_PRD_PNG$'],
        /* Galaxy Watch 42Black */ ['SM-R815','https://images.samsung.com/is/image/samsung/es-galaxy-watch-r815-sm-r815fzkaamo-frontblack-thumb-115084975?$PF_PRD_PNG$'],
        /* Galaxy Watch 46mm */ ['SM-R800','https://images.samsung.com/is/image/samsung/nl-galaxy-watch-r800-sm-r800nzsaphn-frontsilver-111729415?$PD_GALLERY_PNG$'],
        /* Galaxy Watch 46 */ ['SM-R805','https://images.samsung.com/is/image/samsung/es-galaxy-watch-r805-sm-r805fzsaphe-frontsilver-thumb-142665942?$PF_PRD_PNG$'],
        /* Galaxy Watch 42 */ ['SM-R810','https://images.samsung.com/is/image/samsung/es-galaxy-watch-r810-sm-r810nzkaphe-frontblack-thumb-111698263?$PF_PRD_PNG$'],
        /* Gear VR */ ['SM-R325','https://images.samsung.com/is/image/samsung/es-gear-vr-sm-r324-sm-r325nzvcphe-frontblack-thumb-119928670?$PF_PRD_PNG$'],
        /* Gear Fit2 Pro */ ['SM-R365','https://images.samsung.com/is/image/samsung/es-gear-fit2-pro-l-sm-r365-sm-r365nzkaphe-frontblack-thumb-73002430?$PF_PRD_PNG$'],
        /* Galaxy Watch Active */ ['SM-R500','https://images.samsung.com/is/image/samsung/es-galaxy-watch-active-r500-sm-r500nzkaphe-frontblack-thumb-151268114?$PF_PRD_PNG$']
        ];
        // Loop All devices
        for (var a=0; a<pznMob.length; a++){
        for (var o=0; o<pznMob[a].length; o++){
        if (product[0].id.indexOf(pznMob[a][o])>-1){
        var pznc = pznMob[a].length-1;
        console.log(pznMob[a][pznc]);
        $('.ca-product-img').attr('src',pznMob[a][pznc]);
        $('.ca-product-img').attr('data-src-mobile',pznMob[a][pznc]);
        $('.ca-product-img').attr('data-src-pc',pznMob[a][pznc]);
        };
        };
        };

        } else {
        $('.ca-product-img').attr('src',ptargetThumbnail);
        $('.ca-product-img').attr('data-src-mobile',ptargetThumbnail);
        $('.ca-product-img').attr('data-src-pc',ptargetThumbnail);
        };
        };

        /**** Check if jQuery exists ****/
        var checkjQuery = setInterval(function() {
        if (window.$){
        clearInterval(checkjQuery); //clear interval (Always clear your timers/intervals when the task has been completed)
        allForOne(); //load main function
        }
        }, 100);
        }

        function mobile(){
        jQuery(".ca-container .ca-review img").prependTo(".ca-review");
        }

        function desktop(){
        jQuery(".ca-container .ca-review img").insertAfter(".ca-review-txt");
        }
        <` + `/script>`;
    jQuery(".code-block").val(s + '\n' + c);
};