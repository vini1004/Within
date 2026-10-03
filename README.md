# WITHIN — A Little World Made for You

Open `index.html` to enter. It is a mobile-first fantasy game that runs as a static site. On desktop, it sits inside a centered phone-sized viewport.

## In this foundation

- A constellation intro and a bright meadow hub with a small avatar.
- MAP, QUEST, and BAG controls, plus settings for original sound, synthesized ambience, reduced motion, and resetting local progress.
- Tap hidden glimmers, notes, and the odd Moai in the meadow. Three discoveries bring the world to Level 2 and open the Battlefield.
- The Flower Garden has touchable lily/tulip keepsakes and quiet notes. Garden finds also count toward the later Memory Garden.
- The Art Studio has a finger-drawing canvas. Add a dozen little strokes to wake the painting and keep it in the bag.
- Tap open ground in the meadow to walk the explorer around; find three glimmers to unlock the Battlefield.
- Firefly Hollow is a timed touch challenge: catch seven moving fireflies in twenty seconds, then replay for more XP.
- The Battlefield has an original tap-to-cast training dummy, combo counter, damage animation, the Lylia #41 Easter egg, and a swipe-only Benedetta movement trial.
- A support side quest and a gated Memory Garden use details from the design brief. The Last Page remains a placeholder for future words.

Progress is saved in this browser on this device with `localStorage`. No external images, posters, music, libraries, or backend are required. The source is split into `game-state.js`, `areas.js`, `world.js`, `areas-ui.js`, and `mini-games.js` with shared styling in `style.css`.

## Publish with GitHub Pages

Live game: https://vini1004.github.io/Within/

The public repository is https://github.com/vini1004/Within. The included GitHub Actions workflow publishes updates whenever you push to `main`.

1. Upload updated files to the repository root.
2. The **Publish WITHIN to GitHub Pages** workflow runs automatically after a push to `main`.

GitHub Pages serves the site publicly on the internet. Making the repository private does not make the published site private. Anyone who gets the site URL can open it.
