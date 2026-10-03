(() => {
  const KEY='within-game-brief-v1';
  const defaults={entered:false,xp:0,discoveries:[],bag:[],achievements:[],visited:[],gardenFound:[],canvasSaved:false,stories:[],rewatchOpened:false,dummyHp:30,dummyHits:0,dummyWins:0,combo:0,lastCast:0,movementSwipes:0,supportStep:0,supportDone:false,memoryOpened:false,memoryFound:[],sound:true,music:false,reducedMotion:false};
  let state;try{state={...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{state={...defaults}}
  for(const key of ['discoveries','bag','achievements','visited','gardenFound','stories','memoryFound'])if(!Array.isArray(state[key]))state[key]=[];
  const xpTotal=()=>Number(state.xp)||0;
  const level=()=>Math.floor(xpTotal()/50)+1;
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  function toast(message,kind='sparkle'){window.dispatchEvent(new CustomEvent('within-toast',{detail:{message,kind}}))}
  function achievement(id,title,description){if(state.achievements.some(a=>a.id===id))return;state.achievements.push({id,title,description});save();toast(`✦ ${title} · ${description}`,'achievement')}
  function addXP(amount,reason=''){const before=level();state.xp=xpTotal()+amount;save();if(reason)toast(`+${amount} XP · ${reason}`,'reward');if(level()>before){if(level()>=2)achievement('player-one','Player One','The Battlefield has opened.');setTimeout(()=>toast(`LEVEL ${level()} — Something new has awakened.`,'levelup'),80)}window.dispatchEvent(new Event('within-state-change'))}
  function addItem(item){const found=state.bag.find(x=>x.id===item.id);if(found){found.count=(found.count||1)+1;save();window.dispatchEvent(new Event('within-state-change'));return false}state.bag.push({...item,count:1});save();window.dispatchEvent(new Event('within-state-change'));return true}
  function discover(id,item){if(state.discoveries.includes(id)){toast('You found this little secret already. ✨');return false}state.discoveries.push(id);if(item)addItem(item);save();achievement('flower-finder','Flower Finder','Found a little secret in the meadow.');if(state.discoveries.length>=3&&level()<2)addXP(50-xpTotal()%50,'The meadow knows you now');else addXP(12,'A secret found');if(state.discoveries.length>=6)state.memoryOpened=true;save();window.dispatchEvent(new Event('within-state-change'));return true}
  function collectGarden(id,item,message){if(state.gardenFound.includes(id)){toast(message||'The flower nods in the breeze.');return false}state.gardenFound.push(id);addItem(item);addXP(5,'A garden keepsake');save();window.dispatchEvent(new Event('within-state-change'));if(state.gardenFound.length===1)achievement('garden-visitor','A Quiet Place','Found the flower garden.');return true}
  function visit(place){if(!state.visited.includes(place)){state.visited.push(place);save();window.dispatchEvent(new Event('within-state-change'))}}
  function levelTwo(){return level()>=2}
  window.WithinState={get state(){return state},level,save,toast,achievement,addXP,addItem,discover,collectGarden,visit,levelTwo,reset(){for(const key of Object.keys(state))delete state[key];Object.assign(state,JSON.parse(JSON.stringify(defaults)));save();window.dispatchEvent(new Event('within-reset'))}};
})();



