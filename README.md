<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>咖啡愛好者頁面</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <style>
        /* 自定義樣式 */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f8f8;
        }
        .section-title {
            color: #6f4e37;
            margin-bottom: 30px;
        }
        .coffee-section {
            padding: 60px 0;
            background-color: #fff;
        }
        .custom-form {
            max-width: 600px;
            margin: 0 auto;
        }
        footer {
            background-color: #6f4e37;
            color: #fff;
            padding: 20px 0;
            text-align: center;
        }
        .btn-coffee {
            background-color: #6f4e37;
            color: #fff;
            border: none;
        }
        .btn-coffee:hover {
            background-color: #5a3f2d;
            color: #fff;
        }
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Lescoffee</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#coffee-types-flavors">種類與風味</a></li>
                    <li class="nav-item"><a class="nav-link" href="#market-info">市場資訊</a></li>
                    <li class="nav-item"><a class="nav-link" href="#discussion-forum">討論區</a></li>
                    <li class="nav-item"><a class="nav-link" href="#custom-blend">自行調配</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="jumbotron jumbotron-fluid text-center" style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80');
        background-size: cover;
        background-position: center;
        color: #fff;
        padding: 120px 0;
        margin-bottom: 0;">
        <div class="container">
            <h1 class="display-4">歡迎來到Lescoffee</h1>
            <p class="lead" style="color: #fff !important;">探索各類咖啡豆、風味及自定義混合您的完美咖啡。</p>
        </div>
    </header>

    <!-- Coffee Types and Flavors Section -->
    <section id="coffee-types-flavors" class="coffee-section">
        <div class="container">
            <h2 class="section-title text-center">尋找咖啡豆種類及風味</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>種類</h3>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <img src="https://i.imgur.com/XYZ1234.jpg" alt="阿拉比卡咖啡豆" 
                                         class="img-fluid rounded shadow-sm" 
                                         style="max-width: 150px; height: auto;">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-2">阿拉比卡（Arabica）</h5>
                                    <p class="mb-0 text-muted">
                                        最受歡迎的咖啡品種，佔全球產量的60%以上。
                                        具有細緻的香氣，口感清爽，帶有水果或花香調，
                                        酸度適中，苦味柔和。
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <img src="https://i.imgur.com/ABC5678.jpg" alt="羅布斯塔咖啡豆" 
                                         class="img-fluid rounded shadow-sm" 
                                         style="max-width: 150px; height: auto;">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-2">羅布斯塔（Robusta）</h5>
                                    <p class="mb-0 text-muted">
                                        咖啡因含量是阿拉比卡的兩倍，
                                        具有強烈的苦味和濃郁的香氣，
                                        常用於製作義式濃縮咖啡和即溶咖啡。
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <img src="https://i.imgur.com/DEF9012.jpg" alt="賴比瑞亞咖啡豆" 
                                         class="img-fluid rounded shadow-sm" 
                                         style="max-width: 150px; height: auto;">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mb-2">賴比瑞亞（Liberica）</h5>
                                    <p class="mb-0 text-muted">
                                        較為罕見的品種，豆粒較大，
                                        具有獨特的木質香氣和花果香調，
                                        口感醇厚，帶有淡淡的煙燻味。
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Market Information Section -->
    <section id="market-info" class="coffee-section bg-light">
        <div class="container">
            <h2 class="section-title text-center">世界咖啡消耗與出產數量</h2>
            <p class="text-center">資料來源：<a href="https://www.ico.org/" target="_blank">國際咖啡組織（International Coffee Organization）</a></p>
            <div class="text-center">
                <img src="https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/market-data-chart.png" 
                     alt="咖啡市場數據" 
                     class="img-fluid rounded shadow"
                     style="max-width: 800px;">
            </div>
        </div>
    </section>

    <!-- Discussion Forum Section -->
    <section id="discussion-forum" class="coffee-section">
        <div class="container">
            <h2 class="section-title text-center">討論區</h2>
            <!-- 嵌入第三方討論區插件，例如Disqus -->
            <div id="disqus_thread" class="mt-4"></div>
            <script>
                /**
                * 這段代碼來自 Disqus
                */
                var disqus_config = function () {
                    this.page.url = window.location.href;
                    this.page.identifier = "coffee-enthusiasts-page";
                };
                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://lescoffee.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>請啟用 JavaScript 以查看 <a href="https://disqus.com/?ref_noscript">評論</a>。</noscript>
        </div>
    </section>

    <!-- Custom Blend Section -->
    <section id="custom-blend" class="coffee-section bg-light">
        <div class="container">
            <h2 class="section-title text-center">自行調配咖啡</h2>
            <form class="custom-form" onsubmit="return showCoffeeResult(event)" action="javascript:void(0);">
                <div class="form-group">
                    <label for="bean-type">咖啡豆類別：</label>
                    <select id="bean-type" name="bean_type" class="form-control">
                        <option value="brazil">巴西</option>
                        <option value="colombia">哥倫比亞</option>
                        <option value="africa">肯亞</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="strength">咖啡濃淡度：</label>
                    <select id="strength" name="strength" class="form-control" required>
                        <option value="">請選擇濃淡度</option>
                        <option value="mild">淡</option>
                        <option value="strong">濃</option>
                        <option value="extra-strong">特濃</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="brew-method">製作方式：</label>
                    <select id="brew-method" name="brew_method" class="form-control" required>
                        <option value="">請選擇製作方式</option>
                        <option value="espresso">意式濃縮咖啡</option>
                        <option value="pour-over">手沖壺</option>
                        <option value="french-press">法壓壺</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="milk-type">牛奶種類：</label>
                    <select id="milk-type" name="milk_type" class="form-control" required>
                        <option value="">請選擇添加物</option>
                        <option value="oat">燕麥</option>
                        <option value="utf">UTF</option>
                        <option value="milk-3-7">3.7牛奶</option>
                        <option value="water">熱水</option>
                        <option value="none">不添加</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-coffee btn-block mb-4">調配咖啡</button>
                
                <!-- 結果顯示區域 -->
                <div id="resultArea" class="text-center" style="display: none;">
                    <h3 id="coffeeName" class="mb-3"></h3>
                    <img id="coffeeImage" src="" alt="咖啡圖片" class="img-fluid rounded" style="max-width: 300px;">
                </div>
            </form>
        </div>
    </section>

    <!-- 添加 JavaScript -->
    <script>
        function showCoffeeResult(event) {
            // 阻止表單默認提交行為
            event.preventDefault();
            
            const strength = document.getElementById('strength').value;
            const brewMethod = document.getElementById('brew-method').value;
            const milkType = document.getElementById('milk-type').value;
            
            let coffeeName = '';
            let imageUrl = '';

            // 判斷咖啡種類
            if (strength === 'mild' && brewMethod === 'espresso' && milkType === 'utf') {
                coffeeName = 'Caramel Latte - 焦糖拿鐵';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Caramel%20Latte%20-%20焦糖拿鐵_.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'utf') {
                coffeeName = 'Cappuccino - 卡布奇諾';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Cappuccino%20-%20卡布奇諾_.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'milk-3-7') {
                coffeeName  = 'Mochaccino - 摩卡奇諾';
               imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Mochaccino%20-%20摩卡奇諾_.jpg';
            } else if (strength === 'extra-strong' && brewMethod === 'espresso' && milkType === 'water') {
                coffeeName = 'Long Black – 濃黑咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Long%20Black%20–%20濃黑咖啡_.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'water') {
                coffeeName = 'Americano - 美式咖啡';
                imageUrl = 'website/path/to/Americano - 美式咖啡 _.jpg';
            } else if (strength === 'strong' && brewMethod === 'espresso' && milkType === 'oat') {
                coffeeName = 'Oat Milk Cappuccino – 燕麥咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Qat%20Milk%20Cappuccino%20–%20燕麥咖啡_.jpg';
            } else if (strength === 'extra-strong' && 
                     (brewMethod === 'espresso' || brewMethod === 'pour-over') && 
                     milkType === 'none') {
                coffeeName = 'Espresso - 濃縮咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/Expresso%20-%20濃縮咖啡_.jpg';
            } else {
                coffeeName = '個人風味咖啡';
                imageUrl = 'https://raw.githubusercontent.com/lesyu/coffee/main/website/path/to/your-brand-blend-style.jpg';
            }

            // 顯示結果
            document.getElementById('coffeeName').textContent = coffeeName;
            document.getElementById('coffeeImage').src = imageUrl;
            
            // 添加錯誤處理
            document.getElementById('coffeeImage').onerror = function() {
                this.src = 'https://via.placeholder.com/300x200?text=Coffee+Image+Not+Found';
            };

            // 顯示結果區域並平滑滾動
            document.getElementById('resultArea').style.display = 'block';
            document.getElementById('resultArea').scrollIntoView({ 
                behavior: 'smooth',
                block: 'nearest'
            });

            // 移除 URL 中的 hash
            if (window.history && window.history.replaceState) {
                window.history.replaceState('', document.title, window.location.pathname);
            }

            // 確保不會重定向
            return false;
        }
    </script>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 咖啡愛好者。保留所有權利。</p>
    </footer>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html> 
