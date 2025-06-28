目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

コードの概要
このコードは、ウェブページ上でパスワード入力欄のパスワードを表示したり非表示にしたりする機能を実装するためのものです。

具体的には、パスワード入力欄と、「パスワードを表示」というチェックボックスがあり、チェックボックスの ON/OFF でパスワードの表示が切り替わります。また、装飾のための「Box」要素も含まれています。

<h1>HTMLコードの解説 (index.html)</h1>
このHTMLコードは、ウェブページの構造を定義しています。

<h3>!DOCTYPE html</h3> これはHTML5の文書であることを宣言しています。

<h3>html lang="ja"</h3> HTML文書の開始を示し、言語が日本語であることを指定しています。

<h3>head</h3> ウェブページのメタ情報（ページ自体には表示されない情報）を定義するセクションです。

<h3>meta charset="UTF-8"</h3> 文字エンコーディングをUTF-8に設定し、文字化けを防ぎます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> レスポンシブデザイン（様々なデバイスの画面サイズに対応した表示）のために、ビューポート（表示領域）の設定を行っています。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるページのタイトルを設定しています。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部CSSファイルを読み込み、ウェブページの見た目を整えるためのスタイルを適用します。

<h3>body</h3> ウェブページに実際に表示される内容を定義するセクションです。

<h3>div class="box"</h3>

- div 要素は一般的なグループ化のための要素です。

- class="box"が指定されており、後述する CSS でこの要素に特定のスタイル（装飾的な枠など）が適用されます。

- この div の中には「パスワードの表示/非表示」というテキストが表示されます。

<h3>br</h3> 改行を表します。

<h3>div class="password-field"</h3>

- パスワード入力に関連する要素をまとめるための div 要素です。

- class="password-field"が指定されており、CSS でこのグループ全体にスタイルが適用されます。

<h3>input type="password" id="passwordInput" placeholder="パスワードを入力"</h3>

- パスワード入力欄を作成します。

- type="password": 入力された文字が「●」や「\*」のように隠れて表示されます。

- id="passwordInput": JavaScript からこの要素を特定するためのユニークな識別子です。

- placeholder="パスワードを入力": 入力欄が空の場合に薄い文字で表示されるヒントのテキストです。

<h3>input type="checkbox" id="togglePassword"</h3>

- チェックボックスを作成します。

- type="checkbox": クリックで ON/OFF を切り替えることができる四角いチェックボックスを表示します。

- id="togglePassword": JavaScript からこの要素を特定するためのユニークな識別子です。また、label 要素と関連付けるために使用されます。

<h3>label for="togglePassword"</h3>

- チェックボックスの隣に表示されるテキストラベルです。

- for="togglePassword": この label が id="togglePassword"を持つ要素（ここではチェックボックス）と関連付けられていることを示します。これにより、ラベルをクリックしてもチェックボックスの ON/OFF が切り替わるようになります。

<h3>script src="script.js"</h3> script.jsという外部JavaScriptファイルを読み込みます。このファイルがパスワードの表示/非表示のロジックを制御します。

<h1>CSSコードの解説 (style.css)</h1>
このCSSコードは、HTML要素の見た目を整えるためのスタイルを定義しています。

- body:

  - font-family: ウェブページ全体のフォントを設定しています。

  - display: flex;, flex-direction: column;, justify-content: center;, align-items: center;: これらは Flexbox というレイアウト方法を使って、ページ内のコンテンツ（div.box と div.password-field）を縦方向に中央揃えに配置しています。

  - min-height: 100vh;: body の高さがブラウザの表示領域（ビューポート）の高さの 100%になるように設定しています。

  - margin: 0;: ページの余白をなくしています。

  - background-color: #c0c0c0;: 背景色を薄い灰色に設定しています。

  - color: #333;: テキストの色を濃い灰色に設定しています。

- .password-field:

  - パスワード入力欄とその関連要素を囲む div のスタイルです。

  - background-color: 背景色を薄い灰色に設定。

  - padding: 内側の余白を設定。

  - border-radius: 角を丸くしています。

  - box-shadow: ボックスに影をつけて立体感を出しています。

  - display: flex;, flex-direction: column;, align-items: flex-start;: Flexbox を使って、この div 内の要素（入力欄、チェックボックス、ラベル）を縦方向に並べ、左揃えにしています。

- input[type="password"], input[type="text"]:

  - type 属性が password または text の input 要素（つまり、パスワード入力欄）に適用されるスタイルです。JavaScript で type が切り替わっても同じスタイルが適用されます。

  - padding: テキストと入力欄の枠線の間の余白を設定。

  - font-size: フォントサイズを設定。

  - border: 枠線の太さ、種類、色を設定。

  - border-radius: 角を丸くしています。

  - width: 幅を設定。

  - margin-bottom: 下に余白を設定。

  - transition: border-color 0.3s ease;: 枠線の色が変わる際に 0.3 秒かけてゆっくり変化するアニメーションを設定しています。

- input[type="password"]:focus, input[type="text"]:focus:

  - パスワード入力欄がフォーカスされたとき（クリックなどで選択されたとき）のスタイルです。

  - outline: none;: フォーカス時にブラウザが自動的に表示するアウトラインを消しています。

  - border-color: 枠線の色を紫に変更。

  - box-shadow: 新しい影を追加して、フォーカスされていることを視覚的に強調しています。

- .password-field input[type="checkbox"]:

  - .password-field の中にあるチェックボックスのスタイルです。

  - width, height: チェックボックスのサイズを設定。

  - margin-right: 右側に余白を設定。

  - cursor: pointer;: マウスポインタを乗せたときに指の形に変わり、クリックできることを示します。

  - accent-color: #ab47bc;: チェックボックスがチェックされたときの強調色を紫に設定します。

- .password-field label:

  - .password-field の中にあるラベル（「パスワードを表示」）のスタイルです。

  - font-size: フォントサイズを設定。

  - color: テキストの色を設定。

  - cursor: pointer;: マウスポインタを乗せたときに指の形に変わり、クリックできることを示します。

  - display: flex;, align-items: center;: チェックボックスとラベルのテキストを縦方向の中央に揃えて横並びにするために Flexbox を使用しています。

- .box:

  - 「パスワードの表示/非表示」というテキストが入っている装飾的なボックスのスタイルです。

  - width, height: ボックスのサイズを設定。

  - margin: 13% auto 0;: 上に 13%の余白、左右は自動で中央揃え、下は 0 の余白を設定しています。

  - display: flex;, align-items: center;, justify-content: center;: Flexbox を使って、ボックス内のテキストを水平・垂直方向ともに中央揃えにしています。

  - color, font-size, font-weight: テキストの色、サイズ、太さを設定。

  - position: relative;: 子要素（::before と::after）を絶対配置する際の基準位置となります。

  - transition: 0.4s;: ホバー時の変化に 0.4 秒かけてアニメーションするように設定しています。

- .box::before, .box::after:

  - これらは擬似要素と呼ばれ、HTML には存在しないが CSS で生成される要素です。ここでは、ボックスの四隅に装飾的な線を作成しています。

  - content: "";: 擬似要素にコンテンツがないことを示します。

  - width, height: 擬似要素のサイズ。

  - border-top, border-left, border-bottom, border-right: 上、左、下、右の枠線をそれぞれ設定し、角の線のように見せています。

  - position: absolute;: 親要素（.box）を基準に位置を絶対的に指定します。

  - top, left, bottom, right: 親要素の角に配置しています。

  - transition, transition-delay: ホバー時にアニメーションするように設定しています。transition-delay はアニメーションが始まるまでの遅延時間です。

- .box:hover:before, .box:hover::after:

  - .box にマウスがホバーしたときに、::before と::after 擬似要素に適用されるスタイルです。

  - width: 100%;, height: 100%;: 擬似要素がボックス全体に広がるように幅と高さを 100%に設定します。

  - border-color: 枠線の色を薄い白色に変更。

  - transition-delay: 0s;: アニメーションの遅延をなくします。

  - border-radius: 10px;: 角を丸くします。これにより、ボックスの枠線が完全に形成されたときに角が丸くなります。

- .box:hover:

  - .box にマウスがホバーしたときに適用されるスタイルです。

  - background: rgba(255, 255, 255, 0.1);: 背景色を半透明の白に変更します。

  - backdrop-filter: blur(15px);: 背景の要素をぼかします（すりガラスのような効果）。

  - transition-delay: 0.3s;: アニメーションが始まるまでに 0.3 秒の遅延を設定します。

  - border-radius: 10px;: 角を丸くします。

<h1>JavaScriptコードの解説 (script.js)</h1>
このJavaScriptコードは、チェックボックスのON/OFFに応じてパスワード入力欄の表示形式を切り替える機能を提供します。

- 要素の取得:

  - const passwordInput = document.getElementById("passwordInput");

    - HTML の id="passwordInput"を持つ要素（パスワード入力欄）を取得し、passwordInput という定数に代入しています。

  - const togglePasswordCheckbox = document.getElementById("togglePassword");

    - HTML の id="togglePassword"を持つ要素（チェックボックス）を取得し、togglePasswordCheckbox という定数に代入しています。

- イベントリスナーの設定:

  - togglePasswordCheckbox.addEventListener("change", () => { ... });

    - togglePasswordCheckbox（チェックボックス）に対して、「change」イベントが発生したときに、指定された関数を実行するように設定しています。

    - 「change」イベントは、チェックボックスの状態が変わったとき（チェックされたり、チェックが外れたりしたとき）に発生します。

- イベント発生時の処理:

  - イベントが発生すると、() => { ... }で囲まれた無名関数が実行されます。

  - if (togglePasswordCheckbox.checked) { ... } else { ... }

    - この if 文は、togglePasswordCheckbox（チェックボックス）が現在チェックされているかどうかを確認しています。

    - checked プロパティは、チェックボックスが ON の状態であれば true を、OFF の状態であれば false を返します。

  - チェックされている場合（パスワードを表示したい場合）:

    - passwordInput.type = "text";

      - passwordInput（パスワード入力欄）の type 属性を"text"に変更します。

      - type="text"にすることで、入力された文字が隠れずにそのまま表示されるようになります。

  - チェックされていない場合（パスワードを隠したい場合）:

    - passwordInput.type = "password";

      - passwordInput（パスワード入力欄）の type 属性を"password"に戻します。

      - type="password"にすることで、入力された文字が「●」や「\*」のように隠れて表示されるようになります。

<h1>【まとめ】</h1>
この一連のコードは、HTMLでページの構造を作り、CSSでその見た目を美しく整えます。

JavaScript でユーザーの操作（チェックボックスの ON/OFF）に応じてパスワード入力欄の表示を動的に切り替える機能を実現しています。

特に、JavaScript で input 要素の type 属性を切り替えることで、パスワードの表示/非表示を実現している点がポイントです。
