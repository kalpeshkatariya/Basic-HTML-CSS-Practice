var container = document.createElement('div');
container.classList.add('containers');
document.body.appendChild(container);
// ---------------------------------------------
var div1 = document.createElement('div');
container.classList.add('div1');
container.appendChild(div1);

// ---------------------------------------------

var cretahead = document.createElement('h2');
cretahead.textContent = "Clothing For Men And Women";
div1.appendChild(cretahead);
cretahead.classList.add('store-tag');

// ---------------------------------------------

var sec1 = document.createElement('sec1tion');
sec1.classList.add("scetion1");
div1.appendChild(sec1);
// ---------------------------------------------
var cretahead = document.createElement('h2');
cretahead.textContent = "Accessories For Men And Women";
div1.appendChild(cretahead);
cretahead.classList.add('store-tag');

// ---------------------------------------------

var sec2 = document.createElement('section');
sec2.classList.add("scetion2");
div1.appendChild(sec2);

// ---------------------------------------------

var creatdiv1 = document.createElement('div');
creatdiv1.id = 'clothes-list1';
creatdiv1.classList.add("items");
sec1.appendChild(creatdiv1);

var creatdiv2 = document.createElement('div');
creatdiv2.id = 'clothes-list2';
creatdiv2.classList.add("items");
sec1.appendChild(creatdiv2);

var creatdiv3 = document.createElement('div');
creatdiv3.id = 'clothes-list3';
creatdiv3.classList.add("items");
sec1.appendChild(creatdiv3);

var creatdiv4 = document.createElement('div');
creatdiv4.id = 'clothes-list4';
creatdiv4.classList.add("items");
sec1.appendChild(creatdiv4);

var creatdiv5 = document.createElement('div');
creatdiv5.id = 'clothes-list5';
creatdiv5.classList.add("items");
sec1.appendChild(creatdiv5);


var creatdiv6 = document.createElement('div');
creatdiv6.classList.add("items-2");
sec2.appendChild(creatdiv6);

var creatdiv7 = document.createElement('div');
creatdiv7.classList.add("items-2");
sec2.appendChild(creatdiv7);

var creatdiv8 = document.createElement('div');
creatdiv8.classList.add("items-2");
sec2.appendChild(creatdiv8);

var creatdiv9 = document.createElement('div');
creatdiv9.classList.add("items-2");
sec2.appendChild(creatdiv9);

var creatdiv10 = document.createElement('div');
creatdiv10.classList.add("items-2");
sec2.appendChild(creatdiv10);

// ---------------------------------------------
//this is a first card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv1.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Men Navy Blue Solid Sweatshirt";
creatdiv1.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "United Colors of Benetton";
creatdiv1.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 2599";
creatdiv1.appendChild(createprice);
createprice.classList.add('item-price');

// the second card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv2.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Men Black MAMGP T7 Sweat Sporty Jacket";
creatdiv2.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Puma";
creatdiv2.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 7999";
creatdiv2.appendChild(createprice);
createprice.classList.add('item-price');


//----------------------------------------------------

// the thir3 card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv3.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Men Black Action Parkview Lifestyle Shoes";
creatdiv3.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Hush Puppies";
creatdiv3.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 6999";
creatdiv3.appendChild(createprice);
createprice.classList.add('item-price');

// the fourth card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv4.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Women Black Solid Lightweight Leather Jacket";
creatdiv4.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "BARESKIN";
creatdiv4.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 9999";
creatdiv4.appendChild(createprice);
createprice.classList.add('item-price');

// the five card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv5.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Women Blue Solid Shirt Dress";
creatdiv5.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "SASSAFRAS";
creatdiv5.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 5200";
creatdiv5.appendChild(createprice);
createprice.classList.add('item-price');

// the six card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv6.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Unisex Black & Green Reflex 2.0 Smart Band";
creatdiv6.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Fastrack";
creatdiv6.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 1999";
creatdiv6.appendChild(createprice);
createprice.classList.add('item-price');

// the seven card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv7.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Unisex Silver-Toned Series 3 Smart Watch";
creatdiv7.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Apple";
creatdiv7.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 31999";
creatdiv7.appendChild(createprice);
createprice.classList.add('item-price');

// the eight card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv8.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Unisex Black Galaxy Fit Fitness Band",
    "preview";
creatdiv8.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Samsung";
creatdiv8.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 9990";
creatdiv8.appendChild(createprice);
createprice.classList.add('item-price');

// the nine card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv9.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "Gear IconX Black Cord-free Fitness Earbuds";
creatdiv9.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Samsung";
creatdiv9.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 13990";
creatdiv9.appendChild(createprice);
createprice.classList.add('item-price');

// the ten card 

var iteminmage = document.createElement('img');
iteminmage.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg";
iteminmage.classList.add('first-iteme-image');
creatdiv10.appendChild(iteminmage);

var createitemname = document.createElement('h3');
createitemname.textContent = "White 2nd Gen AirPods with Charging Case";
creatdiv10.appendChild(createitemname);
createitemname.classList.add('item-lists');


var createinfo = document.createElement('p');
createinfo.textContent = "Apple";
creatdiv10.appendChild(createinfo);
createinfo.classList.add('item-info');


var createprice = document.createElement('h2');
createprice.textContent = "Rs 14999";
creatdiv10.appendChild(createprice);
createprice.classList.add('item-price');


