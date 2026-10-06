// Side B puzzle data. 81-char strings, row by row, 0 = empty.
// Each puzzle has exactly one solution (checked by tools/verify.mjs).
const PUZZLES = {
  easy: [
    ['730019006061835004200406100019583000603107905000694310006708002800341670300960051', '734219586961835724258476193419583267683127945572694318196758432825341679347962851'],
    ['009120000320000750840900100050091378987305241134870060003006094098000023000039800', '579123486321648759846957132652491378987365241134872965213786594798514623465239817'],
    ['007060000093400201256981070005006002029817530100500600040728356502009740000050100', '417263895893475261256981473785346912629817534134592687941728356562139748378654129'],
    ['007104000001005830620000001906028315540010089182950706300000024064500100000802600', '837194562491265837625387491976428315543716289182953746358671924264539178719842653'],
    ['000156008003794601601320007700000040086030170010000009200013704104572900300489000', '927156438853794621641328597739261845486935172512847369298613754164572983375489216'],
    ['250734086069000004003006051320000805005308200608000039580400600900000140410273098', '251734986769581324843926751324697815195348267678152439582419673937865142416273598'],
    ['000009500809700400004050390503890746907000203268074901072060800005003104001900000', '736429518859731462124658397513892746947516283268374951472165839695283174381947625'],
    ['643907002815032400097800305430000600506708901009000048304009720001420593900503184', '643957812815632479297814365438291657526748931179365248354189726781426593962573184'],
    ['549086000060143089300200600800605304000394000403802005004001008970438010000920453', '549786132762143589318259647821675394657394821493812765234561978975438216186927453'],
    ['501407823004000006900061047095670100076984230008053670640810002200000400853206701', '561497823734528916982361547395672184176984235428153679647819352219735468853246791'],
    ['908015700402387000501690002000750000206809107000061000300076208000548903005120406', '938215764462387591571694832143752689256839147789461325314976258627548913895123476'],
    ['300280601169500400000009375754060209900000006206030147813400000002008753507026004', '375284691169573428428619375754861239931742586286935147813457962642198753597326814'],
    ['025806007000700305000495001004000630362901458058000100400269000506007000200104790', '125836947849712365637495821714528639362971458958643172471269583596387214283154796'],
    ['108503947040100630030470082002390018001000300390017500280031050063005070915708203', '128563947749182635536479182652394718871256394394817526287631459463925871915748263'],
    ['000356000000097600520801000685004731270000086319600452000705029001460000000189000', '197356248843297615526841397685924731274513986319678452468735129951462873732189564'],
    ['000009280009280010800175930100540300785302649004096008057821003010057800028400000', '571639284369284715842175936196548327785312649234796158657821493413957862928463571'],
    ['000070000000200004321469085810002079643090528970800046150324967700001000000080000', '496578213587213694321469785815642379643197528972835146158324967764951832239786451'],
    ['071050029063002780008761000046180000152000438000043510000534800085900140230010970', '471358629563492781928761354346185297152679438897243516719534862685927143234816975'],
    ['030820045020654300000903267608030014014080920270040806152308000009275080860091030', '936827145721654398485913267698532714514786923273149856152368479349275681867491532'],
    ['987024001420160078000890400053401006800205004700609250002046000390058042500910637', '987524361425163978631897425253471896869235714714689253172346589396758142548912637'],
    ['004901070608027905097605080040200017061798520870004030080109760706430108020806400', '534981276618327945297645381945263817361798524872514639483159762756432198129876453'],
    ['704590268826003509001028470000970650200000004049015000018430700402100385367052901', '734591268826743519951628473183974652275386194649215837518439726492167385367852941'],
    ['100007890009805741780100005500276309002483500308519004400008027857901400093700008', '135647892629835741784192635541276389972483516368519274416358927857921463293764158'],
    ['480100000250400001371902085003054102940813067507290300120509673600008014000001059', '489135726256487931371962485863754192942813567517296348128549673695378214734621859'],
    ['503000720280030156600020084072084935060503070359170460410050002728010043035000607', '543861729287439156691725384172684935864593271359172468416357892728916543935248617'],
    ['017008924000200007009751068700010030050403070060070009870325100600004000295100840', '517638924386249517429751368748916235952483671163572489874325196631894752295167843'],
    ['182640000090180740060590002910030500008479300003050094500018060021065080000024157', '182647935395182746467593812914236578658479321273851694549718263721365489836924157'],
    ['700900025000400071089720030017250690300000007052073140090017580870002000130004002', '741936825623485971589721436417258693368149257952673148296317584874562319135894762'],
    ['000300005209070006536189070010040209020906010904010060090534628800020307300007000', '471362985289475136536189472618743259723956814954218763197534628845621397362897541'],
    ['452083701830000295000750300240305800570090034008604029005069000983000057104530982', '452983761837146295691752348249315876576298134318674529725869413983421657164537982'],
  ],
  medium: [
    ['080310490004000008910080006090000000250861043000000080800050014500000200062074050', '685317492724695138913482576198743625257861943436529781879256314541938267362174859'],
    ['076230008038060000000500930710000600000105000003000017047002000000040860300019720', '976231548538964172421587936714328659269175483853496217647852391192743865385619724'],
    ['020300546030060900500700000200073460000000000043510002000007009005030020376009080', '827391546134265978569784213258973461691842357743516892482157639915638724376429185'],
    ['400170300087000000000500904630007080009601400070200059706002000000000740001046002', '465179328987423165213568974634957281529681437178234659746892513892315746351746892'],
    ['008500420064000003030800005740001500090000030006700012600008040400000850051003200', '918536427564927183237814695742391568195682734386745912679258341423179856851463279'],
    ['000004398309000000015800000203060907070000020108020405000001850000000702857900000', '762514398389276514415893276243165987576489123198327465624731859931658742857942631'],
    ['000096140057002900001850000005000094900000007860000500000019800009200710082560000', '328796145457132968691854273275681394913425687864973521746319852539248716182567439'],
    ['060719002000060000570400601302000005006000400400000206901004023000020000200378060', '864719352129563847573482691312846975796235418458197236981654723637921584245378169'],
    ['400000070200617000070000058800000401109802507705000003390000080000963002020000004', '413589276258617349976234158862375491139842567745196823397421685584963712621758934'],
    ['008002001000006023900000700003009275001407600675300100004000002380600000100200300', '538742961417596823926831754843169275291457638675328149764983512382615497159274386'],
    ['004000000018053000023670080000087340000524000097310000070038490000140870000000500', '764892135918453627523671984256987341381524769497316258175238496639145872842769513'],
    ['001040300080093070000002050507009100400708005008400207040200000090680020002070400', '651847392284593671379162854567329148423718965918456237746231589195684723832975416'],
    ['000908140600000700109000500020530078500070002780046030007000804005000007036705000', '372958146658314729149627583924531678563879412781246935297163854815492367436785291'],
    ['120400680050030900000001000012040060790050034080020790000900000008060040049002078', '127495683854236917963871452312749865796158234485623791571984326238567149649312578'],
    ['000003076904000000075900081050094060600000008020510040710009850000000102530200000', '281453976964178325375962481157894263649327518823516749712639854496785132538241697'],
    ['004002010000005708057800920000020103900000004302080000068003590409200000070600400', '894762315623915748157834926786429153915376284342581679268143597439257861571698432'],
    ['400203100005000902090080640207000000600809005000000804049020080703000500008905003', '476293158815467932392581647287654319634819275951732864549326781723148596168975423'],
    ['800700200023540600001600047000070009009000400300020000140007300007063510008001002', '864719235723548691951632847482375169579186423316924758145297386297863514638451972'],
    ['000060749710009060900080000085000010020106080090000650000090006060800075378020000', '832561749714239568956487231685972413423156987197348652541793826269814375378625194'],
    ['015009000300500000406030059030000807600304005501000060740020501000003006000800320', '215469738397581642486237159934652817678314295521798463743926581852143976169875324'],
    ['109020500030500640000104300000002050500706009010900000008201000061009080003040107', '149623578832597641675184392986412753524736819317958426758261934461379285293845167'],
    ['008004090000083014040500030030000052800105009250000080060009070580670000090400600', '318764295625983714947512836136897452874125369259346187461239578582671943793458621'],
    ['307810000008000100025300000400009526070000090859600001000003250004000900000051603', '397812465648597132125346789413789526276135894859624371961473258534268917782951643'],
    ['280009005007304800004000600850007000709000503000900042005000100008701300600800097', '281679435567314829394582671852437916749126583136958742475293168928761354613845297'],
    ['005400060021000050700890000003570004054060270900041500000053001080000690010006300', '895412763421637958736895412263579184154368279978241536649753821387124695512986347'],
    ['706000000005069000094803006003004501060000030502100600600307120000950700000000308', '726541983835269417194873256983624571461795832572138649649387125318952764257416398'],
    ['300000085005004001080730026500002100009040200008300004450013060800200500290000003', '372169485965824371184735926543682197619547238728391654457913862831276549296458713'],
    ['100406080000700000450080071002000597000209000349000100530090046000004000020307005', '173456982298731654456982371612843597785219463349675128537198246861524739924367815'],
    ['200070800070009000048020000861090405300000001504030276000060150000700020009080003', '256371894173849562948625317861297435327456981594138276732964158485713629619582743'],
    ['000100008005070016001600903710500060200000009060004027904006300180030600600009000', '326195748495378216871642953719523864248761539563984127954816372182437695637259481'],
  ],
  hard: [
    ['608000000070010329100200000080300100500000004002004070000006003846030090000000507', '628943715475618329193275648784369152569721834312854976257196483846537291931482567'],
    ['300007000000005206960000017000900040039204670010003000140000032207400000000700009', '328167594471395286965842317652978143839214675714653928146589732297436851583721469'],
    ['230900600100850000008004020700200000680040053000006009020400700000019002001003064', '235971648164852937978364125753298416689147253412536879326485791547619382891723564'],
    ['000010830000098700820000100061400080030000010070005360007000023009240000043050000', '794512836315698742826374159561439287432867915978125364157986423689243571243751698'],
    ['400010000052008400000003090670000002380000075200000039020900000001600920000080007', '493216758152798463768453291675839142389124675214567839527941386831675924946382517'],
    ['000080030300019040100500026000003800070000050006400000850001002060890005030050000', '645782931327619548198534726514923867973168254286475193859341672462897315731256489'],
    ['000000008906008007380450069000009000600874003000300000720013094100700506400000000', '517296348946138257382457169834529671651874923279361485725613894198742536463985712'],
    ['804100500013000000000000046507030004049070310100050602750000000000000950001008703', '874162539613495287925783146567231894249876315138954672756319428382647951491528763'],
    ['009630005006000000042801000790002000001000600000400012000306720000000400600087500', '179634285386725149542891376793162854421958637865473912958346721237519468614287593'],
    ['604300020100800009070006300000070986000000000248010000006100050400005008050003602', '694351827135827469872946315513274986967538241248619573386192754429765138751483692'],
    ['000006000729000300600050004002000643000070000391000800500090007007000198000300000', '145736289729148356683952714872519643456873921391624875568291437237465198914387562'],
    ['020000007001089000000640108080000702005000400204000030608034000000960300500000080', '829315647461789523357642198986453712135827469274196835698534271712968354543271986'],
    ['000900060908005003001000050200030400500408002004070006090000300600800209010003000', '345927861968145723721386954286531497579468132134279586497652318653814279812793645'],
    ['006700000500029013002100560805000030000000000060000805024007100690540008000006200', '416735982587629413932184567845261739273958641169473825324897156691542378758316294'],
    ['703408001020060000000000360090500600005070100006004030039000000000050040600807503', '763428951921365487854719362497531628385276194216984735539142876178653249642897513'],
    ['008010602600000000005900800090400700170000068004001020007004200000000004502060900', '438715692629843157715926843296438715173592468854671329987154236361289574542367981'],
    ['010020650000006000900053047004000000170000039000000500230580006000100000069070080', '418927653753416892926853147694235718175648239382791564231584976847169325569372481'],
    ['020900004680700200000056003000000001005439600700000000300690000004002015800001090', '527983164683714259149256783496827531215439678738165942351698427964372815872541396'],
    ['024150000000000800075004200060000000907502308000000060002400780008000000000095420', '824159637139627845675384291261938574947562318583741962352416789498273156716895423'],
    ['500040609120800000007060000060000007002603400400000060000030700000005021801020006', '583247619126859374947361852365418297712693485498572163259136748634785921871924536'],
    ['050980020004007000702003010005800300006070200008009400020300809000200500030058040', '153986724984127635762543918475812396396475281218639457521364879847291563639758142'],
    ['009000006000004730000800195200050800070060050006040007537001000094300000800000400', '389517246165924738742836195213759864478163952956248317537481629694372581821695473'],
    ['000008900004051860000620010090300020400000007060002090050043000048570200003200000', '615738942724951863389624715891367524432195687567482391256843179148579236973216458'],
    ['300900002000581700700003000840000001001407900200000065000300006004865000600002004', '318976542426581739759243618843659271561427983297138465172394856934865127685712394'],
    ['000000009000604105002070040070050063000806000350090080090040500405207000200000000', '741583629983624175562179348879451263124836957356792481697348512435217896218965734'],
    ['090200000865300100200080040080000006109000408400000090030060002002009854000008060', '394251687865347129271986543783495216159672438426813795538164972612739854947528361'],
    ['310900057050060008002070000080000900003000200004000010000090700800030040470006089', '318942657957163428642875193586217934193684275724359816235498761869731542471526389'],
    ['000000270062100900510090800000640000090000030000025000008070094005009320029000000', '984356271362187945517294863251643789496718532873925416638572194145869327729431658'],
    ['900000060000200409600100050120070300009305700005010092050007006403001000080000001', '942758163518263479637149258124976385869325714375814692251497836493681527786532941'],
    ['400600800000000000050034021300890107010000050709051002190740060000000000004009008', '423617895971285436856934721365892147218476359749351682192748563687523914534169278'],
  ],
};

(function () {
  'use strict';

  // ---------- Grid geometry ----------

  const ROW = (i) => (i / 9) | 0;
  const COL = (i) => i % 9;
  const BOX = (i) => ((ROW(i) / 3) | 0) * 3 + ((COL(i) / 3) | 0);

  const UNITS = [];
  for (let r = 0; r < 9; r++) UNITS.push(Array.from({ length: 9 }, (_, c) => r * 9 + c));
  for (let c = 0; c < 9; c++) UNITS.push(Array.from({ length: 9 }, (_, r) => r * 9 + c));
  for (let b = 0; b < 9; b++) {
    const r0 = ((b / 3) | 0) * 3, c0 = (b % 3) * 3, u = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) u.push((r0 + r) * 9 + c0 + c);
    UNITS.push(u);
  }
  const PEERS = Array.from({ length: 81 }, (_, i) =>
    Array.from({ length: 81 }, (_, j) => j).filter(
      (j) => j !== i && (ROW(j) === ROW(i) || COL(j) === COL(i) || BOX(j) === BOX(i))
    )
  );

  // ---------- Validator ----------

  // Cells whose digit repeats somewhere in its row, column, or box.
  function findConflicts(values) {
    const bad = new Set();
    for (const unit of UNITS) {
      const seen = new Map();
      for (const i of unit) {
        const d = values[i];
        if (!d) continue;
        if (seen.has(d)) { bad.add(i); bad.add(seen.get(d)); } else seen.set(d, i);
      }
    }
    return bad;
  }

  // True only when every cell is filled and every row, column, and box holds 1–9 once.
  function isSolved(values) {
    for (let i = 0; i < 81; i++) if (!(values[i] >= 1 && values[i] <= 9)) return false;
    return findConflicts(values).size === 0;
  }

  function parse(str) { return Array.from(str, (ch) => Number(ch)); }

  function puzzleIsSound(p, s) {
    if (!/^[0-9]{81}$/.test(p) || !/^[1-9]{81}$/.test(s)) return false;
    const sol = parse(s);
    if (!isSolved(sol)) return false;
    for (let i = 0; i < 81; i++) if (p[i] !== '0' && p[i] !== s[i]) return false;
    return true;
  }

  const LEVELS = ['easy', 'medium', 'hard'];
  const LEVEL_NAMES = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const LIBRARY = {};
  for (const lvl of LEVELS) LIBRARY[lvl] = (PUZZLES[lvl] || []).filter(([p, s]) => puzzleIsSound(p, s));

  // ---------- Storage ----------

  const KEY = 'sideb.v1';
  const store = {
    get(k, fallback) {
      try { const v = localStorage.getItem(KEY + '.' + k); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(k, v) {
      try { localStorage.setItem(KEY + '.' + k, JSON.stringify(v)); } catch (e) { /* private mode: play on without saving */ }
    },
  };

  // ---------- Sound (Web Audio, generated, nothing to download) ----------

  const sound = (function () {
    let ctx = null;
    let noise = null;
    let muted = !!store.get('muted', false);

    function context() {
      if (muted) return null;
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        try { ctx = new AC(); } catch (e) { return null; }
      }
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      return ctx;
    }

    function noiseBuffer(c) {
      if (noise) return noise;
      noise = c.createBuffer(1, Math.floor(c.sampleRate * 0.2), c.sampleRate);
      const data = noise.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      return noise;
    }

    function env(c, gainNode, t, peak, attack, release) {
      const g = gainNode.gain;
      g.setValueAtTime(0.0001, t);
      g.exponentialRampToValueAtTime(peak, t + attack);
      g.exponentialRampToValueAtTime(0.0001, t + attack + release);
    }

    // A soft, rounded button click. `pitch` sets its weight.
    function click(pitch) {
      const c = context(); if (!c || c.state !== 'running') return;
      const t = c.currentTime + 0.005;
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(pitch, t);
      o.frequency.exponentialRampToValueAtTime(pitch * 0.55, t + 0.04);
      env(c, g, t, 0.07, 0.003, 0.05);
      o.connect(g).connect(c.destination);
      o.start(t); o.stop(t + 0.08);

      const n = c.createBufferSource(), f = c.createBiquadFilter(), ng = c.createGain();
      n.buffer = noiseBuffer(c);
      f.type = 'bandpass'; f.frequency.value = pitch * 2.2; f.Q.value = 1.2;
      env(c, ng, t, 0.025, 0.001, 0.018);
      n.connect(f).connect(ng).connect(c.destination);
      n.start(t); n.stop(t + 0.03);
    }

    // A tiny burst of radio static.
    function blip() {
      const c = context(); if (!c || c.state !== 'running') return;
      const t = c.currentTime + 0.005;
      const n = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      n.buffer = noiseBuffer(c);
      f.type = 'bandpass'; f.frequency.value = 2600; f.Q.value = 0.8;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.045, t + 0.004);
      g.gain.setValueAtTime(0.02, t + 0.025);
      g.gain.setValueAtTime(0.04, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      n.connect(f).connect(g).connect(c.destination);
      n.start(t); n.stop(t + 0.1);
    }

    // A short, warm major-seventh chord, gently strummed.
    function chord() {
      const c = context(); if (!c || c.state !== 'running') return;
      const t0 = c.currentTime + 0.02;
      const lp = c.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 1600; lp.Q.value = 0.4;
      const master = c.createGain(); master.gain.value = 0.9;
      lp.connect(master).connect(c.destination);
      [146.83, 220.0, 277.18, 369.99, 554.37].forEach((hz, k) => {
        const t = t0 + k * 0.045;
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'triangle';
        o.frequency.value = hz;
        o.detune.value = (k % 2 ? 4 : -4);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.04, t + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 2.0);
        o.connect(g).connect(lp);
        o.start(t); o.stop(t + 2.1);
      });
    }

    // iOS: start/resume the context inside the first user gesture, silently.
    function unlock() {
      const c = context(); if (!c) return;
      try {
        const b = c.createBuffer(1, 1, 22050), s = c.createBufferSource();
        s.buffer = b; s.connect(c.destination); s.start(0);
      } catch (e) { /* ignore */ }
    }

    return {
      place: () => click(1500),
      erase: () => click(620),
      blip,
      chord,
      unlock,
      get muted() { return muted; },
      setMuted(m) {
        muted = m;
        store.set('muted', m);
        if (m && ctx && ctx.state === 'running') ctx.suspend().catch(() => {});
        if (!m) unlock();
      },
    };
  })();

  // ---------- State ----------

  const state = {
    level: 'easy',
    pick: 0,
    puzzle: '',
    solution: '',
    given: [],      // booleans
    values: [],     // 0..9
    notes: [],      // bitmask per cell, bit d = note d
    past: [],       // undo stack of change lists
    future: [],     // redo stack
    selected: -1,
    notesMode: false,
    solved: false,
  };

  function startPuzzle(level) {
    const list = LIBRARY[level];
    if (!list || !list.length) return;
    const cursors = store.get('cursors', {});
    let pick = cursors[level];
    if (typeof pick !== 'number') pick = Math.floor(Math.random() * list.length);
    else pick = (pick + 1) % list.length;
    cursors[level] = pick;
    store.set('cursors', cursors);

    const [p, s] = list[pick];
    state.level = level;
    state.pick = pick;
    state.puzzle = p;
    state.solution = s;
    state.values = parse(p);
    state.given = state.values.map((v) => v !== 0);
    state.notes = new Array(81).fill(0);
    state.past = [];
    state.future = [];
    state.solved = false;
    state.selected = state.values.indexOf(0);
    save();
  }

  function save() {
    store.set('game', {
      level: state.level,
      puzzle: state.puzzle,
      solution: state.solution,
      values: state.values.join(''),
      notes: state.notes,
      past: state.past.slice(-300),
      future: state.future.slice(-300),
      selected: state.selected,
      notesMode: state.notesMode,
      solved: state.solved,
    });
  }

  function restore() {
    const g = store.get('game', null);
    if (!g || !puzzleIsSound(g.puzzle, g.solution) || typeof g.values !== 'string' || g.values.length !== 81) return false;
    const vals = parse(g.values);
    const givens = parse(g.puzzle);
    for (let i = 0; i < 81; i++) if (givens[i] && vals[i] !== givens[i]) return false;
    state.level = LEVELS.includes(g.level) ? g.level : 'easy';
    state.puzzle = g.puzzle;
    state.solution = g.solution;
    state.values = vals;
    state.given = givens.map((v) => v !== 0);
    state.notes = Array.isArray(g.notes) && g.notes.length === 81 ? g.notes.map((n) => n | 0) : new Array(81).fill(0);
    state.past = Array.isArray(g.past) ? g.past : [];
    state.future = Array.isArray(g.future) ? g.future : [];
    state.selected = Number.isInteger(g.selected) ? g.selected : -1;
    state.notesMode = !!g.notesMode;
    state.solved = isSolved(state.values);
    return true;
  }

  function hasProgress() {
    if (state.solved) return false;
    for (let i = 0; i < 81; i++) if ((!state.given[i] && state.values[i]) || state.notes[i]) return true;
    return false;
  }

  // ---------- Moves (every change goes through here so undo works) ----------

  function snapshot(i) { return [state.values[i], state.notes[i]]; }

  function commit(changes) {
    if (!changes.length) return;
    for (const ch of changes) { state.values[ch.i] = ch.to[0]; state.notes[ch.i] = ch.to[1]; }
    state.past.push(changes);
    state.future = [];
  }

  function change(i, value, notes) {
    const from = snapshot(i);
    if (from[0] === value && from[1] === notes) return [];
    return [{ i, from, to: [value, notes] }];
  }

  function placeDigit(d) {
    const i = state.selected;
    if (i < 0 || state.given[i] || state.solved) return;

    if (state.notesMode) {
      if (state.values[i]) return;
      commit(change(i, 0, state.notes[i] ^ (1 << d)));
      sound.place();
      afterMove();
      return;
    }

    if (state.values[i] === d) {
      commit(change(i, 0, state.notes[i]));
      sound.erase();
      afterMove();
      return;
    }

    commit(change(i, d, 0));   // placing a digit clears that cell's notes
    const conflicts = findConflicts(state.values);
    if (conflicts.has(i)) sound.blip(); else sound.place();
    twitch();
    afterMove();
  }

  function erase() {
    const i = state.selected;
    if (i < 0 || state.given[i] || state.solved) return;
    if (!state.values[i] && !state.notes[i]) return;
    commit(state.values[i] ? change(i, 0, state.notes[i]) : change(i, 0, 0));
    sound.erase();
    afterMove();
  }

  function undo() {
    const changes = state.past.pop();
    if (!changes) return;
    for (const ch of changes) { state.values[ch.i] = ch.from[0]; state.notes[ch.i] = ch.from[1]; }
    state.future.push(changes);
    state.selected = changes[0].i;
    sound.erase();
    afterMove(true);
  }

  function redo() {
    const changes = state.future.pop();
    if (!changes) return;
    for (const ch of changes) { state.values[ch.i] = ch.to[0]; state.notes[ch.i] = ch.to[1]; }
    state.past.push(changes);
    state.selected = changes[0].i;
    sound.place();
    afterMove(true);
  }

  // Hint: first point at one wrong digit if there is one; otherwise fill one empty cell.
  function hint() {
    if (state.solved) return;
    const sol = parse(state.solution);
    const wrong = [];
    for (let i = 0; i < 81; i++) if (!state.given[i] && state.values[i] && state.values[i] !== sol[i]) wrong.push(i);
    if (wrong.length) {
      const i = wrong.includes(state.selected) ? state.selected : wrong[0];
      state.selected = i;
      render();
      pointAt(i);
      say('This one doesn’t belong. Take another look.');
      return;
    }
    const empty = [];
    for (let i = 0; i < 81; i++) if (!state.values[i]) empty.push(i);
    if (!empty.length) return;
    let target = empty.includes(state.selected) ? state.selected : -1;
    if (target < 0) {
      // The most-constrained empty square: the one a person would most likely spot next.
      let best = 10;
      for (const i of empty) {
        const used = new Set(PEERS[i].map((p) => state.values[p]));
        const n = 9 - [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((d) => used.has(d)).length;
        if (n < best) { best = n; target = i; }
      }
    }
    state.selected = target;
    commit(change(target, sol[target], 0));
    sound.place();
    afterMove();
    say('Filled in one square.');
  }

  function afterMove(quiet) {
    const wasSolved = state.solved;
    state.solved = isSolved(state.values);
    save();
    render();
    if (state.solved && !wasSolved && !quiet) {
      sound.chord();
      say('That’s the whole side. Pick a new puzzle when you’re ready.', true);
    } else if (state.solved && !wasSolved) {
      say('That’s the whole side.', true);
    }
  }

  // ---------- Rendering ----------

  const $ = (id) => document.getElementById(id);
  const boardEl = $('board');
  const padEl = $('pad');
  const cells = [];
  const digitButtons = [];

  function buildBoard() {
    for (let i = 0; i < 81; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'cell';
      b.setAttribute('role', 'gridcell');
      b.dataset.i = i;
      b.tabIndex = -1;
      boardEl.appendChild(b);
      cells.push(b);
    }
    for (let d = 1; d <= 9; d++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'digit';
      b.textContent = d;
      b.dataset.d = d;
      padEl.appendChild(b);
      digitButtons.push(b);
    }
  }

  function render() {
    const sel = state.selected;
    const selVal = sel >= 0 ? state.values[sel] : 0;
    const conflicts = findConflicts(state.values);

    for (let i = 0; i < 81; i++) {
      const el = cells[i];
      const v = state.values[i];
      const cls = ['cell'];
      if (COL(i) === 8) cls.push('c8');
      if (ROW(i) === 8) cls.push('r8');
      if (COL(i) % 3 === 2 && COL(i) !== 8) cls.push('bx');
      if (ROW(i) % 3 === 2 && ROW(i) !== 8) cls.push('by');
      cls.push(state.given[i] ? 'given' : 'player');
      if (sel >= 0) {
        if (i === sel) cls.push('selected');
        else if (selVal && v === selVal) cls.push('same');
        else if (ROW(i) === ROW(sel) || COL(i) === COL(sel) || BOX(i) === BOX(sel)) cls.push('peer');
      }
      if (v && conflicts.has(i)) cls.push('conflict');
      if (el.classList.contains('pointed')) cls.push('pointed');
      el.className = cls.join(' ');

      const key = v ? 'v' + v : 'n' + state.notes[i] + (selVal ? 'h' + selVal : '');
      if (el.dataset.key !== key) {
        el.dataset.key = key;
        if (v) {
          el.textContent = v;
        } else if (state.notes[i]) {
          const grid = document.createElement('span');
          grid.className = 'notes';
          for (let d = 1; d <= 9; d++) {
            const s = document.createElement('span');
            if (state.notes[i] & (1 << d)) {
              s.textContent = d;
              if (d === selVal) s.className = 'hot';
            }
            grid.appendChild(s);
          }
          el.replaceChildren(grid);
        } else {
          el.textContent = '';
        }
      }
      el.setAttribute('aria-label', describe(i, conflicts));
      el.setAttribute('aria-selected', i === sel ? 'true' : 'false');
    }

    const counts = new Array(10).fill(0);
    for (const v of state.values) counts[v]++;
    digitButtons.forEach((b, k) => b.classList.toggle('used', counts[k + 1] >= 9));
    padEl.classList.toggle('notes-on', state.notesMode);

    $('notes').setAttribute('aria-pressed', String(state.notesMode));
    $('notes-state').textContent = state.notesMode ? 'on' : 'off';
    $('undo').disabled = !state.past.length;
    $('redo').disabled = !state.future.length;
    $('label-level').textContent = LEVEL_NAMES[state.level];
    $('cassette').classList.toggle('solved', state.solved);
  }

  function describe(i, conflicts) {
    const v = state.values[i];
    let s = `Row ${ROW(i) + 1}, column ${COL(i) + 1}: `;
    if (v) s += v + (state.given[i] ? ', given' : '') + (conflicts.has(i) ? ', conflict' : '');
    else if (state.notes[i]) s += 'notes ' + [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((d) => state.notes[i] & (1 << d)).join(' ');
    else s += 'empty';
    return s;
  }

  function pointAt(i) {
    const el = cells[i];
    el.classList.remove('pointed');
    void el.offsetWidth;
    el.classList.add('pointed');
    clearTimeout(pointAt.t);
    pointAt.t = setTimeout(() => el.classList.remove('pointed'), 2600);
  }

  function twitch() {
    if (sound.muted) return;
    const eq = $('eq');
    eq.classList.remove('twitch');
    void eq.offsetWidth;
    eq.classList.add('twitch');
  }

  function say(text, lasting) {
    const el = $('status');
    clearTimeout(say.t);
    el.textContent = text;
    el.classList.remove('fade');
    el.classList.toggle('done', !!lasting);
    if (!lasting) say.t = setTimeout(() => el.classList.add('fade'), 4000);
  }

  function renderMute() {
    const m = sound.muted;
    $('mute').setAttribute('aria-pressed', String(m));
    $('mute-label').textContent = m ? 'Muted' : 'Sound on';
    $('mute').setAttribute('aria-label', m ? 'Sound is muted. Tap to turn sound on.' : 'Sound is on. Tap to mute.');
  }

  // ---------- Input ----------

  function select(i) {
    state.selected = i;
    save();
    render();
  }

  function toggleNotes() {
    state.notesMode = !state.notesMode;
    save();
    render();
  }

  function toggleMute() {
    sound.setMuted(!sound.muted);
    renderMute();
  }

  function move(dr, dc) {
    let i = state.selected;
    if (i < 0) { select(40); return; }
    const r = (ROW(i) + dr + 9) % 9, c = (COL(i) + dc + 9) % 9;
    select(r * 9 + c);
  }

  let confirmTimer = null;
  function newPuzzle(btn) {
    const level = btn.dataset.level;
    if (hasProgress() && !btn.classList.contains('confirm')) {
      document.querySelectorAll('.level.confirm').forEach(resetLevelButton);
      btn.classList.add('confirm');
      btn.textContent = 'Tap again for new';
      clearTimeout(confirmTimer);
      confirmTimer = setTimeout(() => resetLevelButton(btn), 3500);
      return;
    }
    resetLevelButton(btn);
    startPuzzle(level);
    render();
    say(LEVEL_NAMES[level] + ' puzzle. Take your time.');
  }
  function resetLevelButton(b) {
    b.classList.remove('confirm');
    b.textContent = LEVEL_NAMES[b.dataset.level];
  }

  function bind() {
    // Audio may only start after a tap; do it quietly on the first one.
    const firstGesture = () => {
      sound.unlock();
      window.removeEventListener('pointerdown', firstGesture, true);
      window.removeEventListener('keydown', firstGesture, true);
    };
    window.addEventListener('pointerdown', firstGesture, true);
    window.addEventListener('keydown', firstGesture, true);

    boardEl.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      if (cell) select(Number(cell.dataset.i));
    });
    padEl.addEventListener('click', (e) => {
      const b = e.target.closest('.digit');
      if (b) placeDigit(Number(b.dataset.d));
    });
    $('notes').addEventListener('click', toggleNotes);
    $('erase').addEventListener('click', erase);
    $('undo').addEventListener('click', undo);
    $('redo').addEventListener('click', redo);
    $('hint').addEventListener('click', hint);
    $('mute').addEventListener('click', toggleMute);
    $('help').addEventListener('click', () => { $('howto').hidden = !$('howto').hidden; });
    $('howto-close').addEventListener('click', () => { $('howto').hidden = true; store.set('seenHowTo', true); });
    document.querySelectorAll('.level').forEach((b) => b.addEventListener('click', () => newPuzzle(b)));

    document.addEventListener('keydown', (e) => {
      if (e.altKey) return;
      const k = e.key;
      const mod = e.metaKey || e.ctrlKey;
      if (mod && (k === 'z' || k === 'Z')) { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
      if (mod && (k === 'y' || k === 'Y')) { e.preventDefault(); redo(); return; }
      if (mod) return;
      if (k >= '1' && k <= '9') { e.preventDefault(); placeDigit(Number(k)); }
      else if (k === 'ArrowUp') { e.preventDefault(); move(-1, 0); }
      else if (k === 'ArrowDown') { e.preventDefault(); move(1, 0); }
      else if (k === 'ArrowLeft') { e.preventDefault(); move(0, -1); }
      else if (k === 'ArrowRight') { e.preventDefault(); move(0, 1); }
      else if (k === 'Backspace' || k === 'Delete' || k === '0') { e.preventDefault(); erase(); }
      else if (k === 'n' || k === 'N') toggleNotes();
      else if (k === 'z' || k === 'Z') { e.shiftKey ? redo() : undo(); }
      else if (k === 'y' || k === 'Y') redo();
      else if (k === 'm' || k === 'M') toggleMute();
      else if (k === 'h' || k === 'H') hint();
    });
  }

  // ---------- Boot ----------

  buildBoard();
  bind();
  if (!restore()) startPuzzle('easy');
  renderMute();
  render();
  if (!store.get('seenHowTo', false)) $('howto').hidden = false;
  if (state.solved) say('That’s the whole side. Pick a new puzzle when you’re ready.', true);

  // Keeps the game playable offline after the first visit (GitHub Pages serves https).
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
