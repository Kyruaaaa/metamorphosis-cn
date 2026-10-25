// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to add your rocks.
//
//  Put image files in the /images folder and write their paths below,
//  e.g.  img: "images/rock-01.png"
//  Leave a path as "" and a placeholder stone is drawn instead.
//  Transparent PNGs (background removed) look best.
//
//  Position 0 is 12 o'clock, then clockwise like a clock.
//  Positions 0, 3, 6, 9 (top, right, bottom, left) are the general
//  points: they all use GENERAL_ROCK. With text they show it in the
//  box; without text they open an editable notes space.
//
//  Optional per rock:
//    size: 1.7          – draw it bigger on the clock (and in the after-kiln view)
//    placeholder: {...} – colours for the stand-in stone until images exist
//    model: "models/x.glb" – a 3D model shown on the clock instead of the image (turns slowly)
//    modelBefore / modelAfter – 3D models for the before / after-kiln views
//                              (after = the rock as glass + wireframe, from make_ghost.py)
//    modelColor / modelOrbit – tint for an untextured model / starting view angle
// ─────────────────────────────────────────────────────────────

window.SITE_TITLE = "Metamorphosis";

// The one rock shown at all four general points
window.GENERAL_ROCK = { img: "" };

window.ROCKS = [
  /* 12 */ { general: true, title: "Metamorphosis",
             model: "models/lava_1.glb",   // a small lava rock marks this point on the clock
             text: "A clock that keeps time not by motion\nbut by material change.\nEach hour holds a rock transformed by heat:\ndarkened, fractured, discoloured.\n\n" +
                   "Like the stages of an animal's metamorphosis,\neach belongs to one continuous process\nwhile bearing a different form.\n\n" +
                   "Together they make a geological clock,\nrecording change through the traces it leaves." },
  /*  1 */ { name: "Fine-grained mica schist", subtitle: "", img: "", before: "", after: "",
             model: "models/01oclock.glb", modelBefore: "models/01oclock.glb", modelAfter: "models/01oclock_ghost.glb",   // built from the photo sheet
             text: "Fine mica schist: muscovite, plagioclase\nand specks of almandine garnet,\nFe₃Al₂(SiO₄)₃.\n\n" +
                   "Its scarce iron is bound in garnet and\nmuscovite, which hold their Fe²⁺ past\n~900 °C: little hematite, no colour change.\n\n" +
                   "Garnet stays stable beyond 1000 °C,\nkeeping its orange; fine muscovite loses\nOH near 800 °C, yet still glints.\n\n" +
                   "Its bound water, a few percent in mica,\nseeped out slowly: little gas." },
  /*  2 */ { name: "Mica schist", subtitle: "", img: "", before: "", after: "",
             model: "models/02oclock.glb", modelBefore: "models/02oclock.glb", modelAfter: "models/02oclock_ghost.glb",   // built from the photo sheet
             text: "A stream-rounded cobble of mica schist:\nquartz, layered biotite and muscovite.\n\n" +
                   "Its weathered rind of goethite, FeOOH,\ndehydrated to hematite: an iron-red skin.\nInside, dark biotite layers kept their grey.\n\n" +
                   "The lime-yellow and orange stains are likely\njarosite and limonite from weathered pyrite.\n\n" +
                   "Above ~500 °C jarosite releases SO₃ and H₂O;\nthe mica gives off traces of fluorine.\nSO₃ binds the glass's sodium as white Na₂SO₄\nand HF etches it: a misty, smoky bubble." },
  /*  3 */ { general: true, title: "Providence ground",
             model: "models/lava_2.glb",   // a small lava rock marks this point on the clock
             text: "Providence stands on Avalonia, crust\ntorn from Gondwana that docked with\nNorth America over 400 million years ago;\nits granites and schists are ~600 Myr old.\n\n" +
                   "About 300 million years ago, mud, sand\nand coal filled the Narragansett Basin,\nthen were squeezed and baked as Africa\nclosed in to form Pangaea:\nmud became slate, coal became graphite.\n\n" +
                   "Ice sheets later broke these rocks\nand scattered them through glacial till." },
  /*  4 */ { name: "Tuff", subtitle: "", img: "", before: "", after: "",
             model: "models/4oclock_tuff_baked.glb",         // 3D model on the clock
             modelBefore: "models/4oclock_tuff_baked.glb", modelAfter: "models/4oclock_tuff_ghost.glb",   // ...and in the before-kiln view (it's the unfired look)
             // \n breaks a line, a blank line (\n\n) starts a new verse
             text: "Compacted volcanic ash: glass shards, feldspar,\nand water-rich zeolites and clays.\n\n" +
                   "From ~300 °C, iron hydroxides dehydrate\nand Fe²⁺ oxidises to red hematite, Fe₂O₃.\n\n" +
                   "Organic carbon burns off as CO₂ and the clays\nlose bound water, so the grey matrix pales.\n\n" +
                   "It held more volatiles than any other rock:\nzeolite water, clay OH (450–700 °C), pore air.\nReleased as the glass sealed near 720 °C,\nthey inflated the viscous glass.\nCooled, the steam condensed; CO₂ and N₂ remain,\ncolourless: they absorb only in the infrared." },
  /*  5 */ { name: "Phyllite", subtitle: "", img: "", before: "", after: "",
             model: "models/05oclock.glb", modelBefore: "models/05oclock.glb", modelAfter: "models/05oclock_ghost.glb",   // built from the photo sheet
             text: "Metamorphosed mudstone: quartz, chlorite,\nand sericite mica aligned in thin sheets.\n\n" +
                   "Above ~600 °C chlorite breaks down; its Fe²⁺\noxidises to hematite, Fe₂O₃: brick red.\nRust spots, already iron oxyhydroxide,\nheld more iron and fired a deeper red.\n\n" +
                   "Its fine glitter was light off aligned\nmica flakes. Losing OH at 700–900 °C,\nthey dulled under a hematite film.\n\n" +
                   "Dense, with little bound water,\nit gave off little gas, which seeped\nout along its foliation planes." },
  /*  6 */ { general: true, title: "Changed twice",
             model: "models/lava_3.glb",   // a small lava rock marks this point on the clock
             text: "Every rock here was changed once already,\ndeep in the Earth: mud pressed to slate\nand phyllite, silt welded, mica grown\ninto schist, granite banded into gneiss.\nOnly the tuff was born of fire.\n\n" +
                   "The kiln repeats that change in hours:\niron rusts to hematite, water and carbon\nescape as gas, grains crack and loosen.\n\n" +
                   "Each colour, crack and bubble\nis a record of heat, written twice." },
  /*  7 */ { name: "Graphitic slate", subtitle: "", img: "", before: "", after: "",
             model: "models/07oclock.glb", modelBefore: "models/07oclock.glb", modelAfter: "models/07oclock_ghost.glb",   // built from the photo sheet
             text: "Low-grade metamorphic mudstone: micas,\nquartz, pyrite and black graphitic carbon.\n\n" +
                   "Carbon burns off as CO₂ from ~600 °C;\npyrite, FeS₂, roasts to Fe₂O₃ and SO₂.\nWith the black gone, hematite reds it all.\n\n" +
                   "Gas and the 573 °C quartz inversion\npried its cleavage planes apart:\nflakes now float loose in the glass.\n\n" +
                   "C + O₂ → CO₂ adds no volume, so the\nbubble spread wide between the flakes\nbut never swelled: big, yet flat." },
  /*  8 */ { name: "Metasiltstone", subtitle: "", img: "", before: "", after: "",
             model: "models/08oclock.glb", modelBefore: "models/08oclock.glb", modelAfter: "models/08oclock_ghost.glb",   // built from the photo sheet
             text: "Siltstone mildly metamorphosed: quartz\nand feldspar silt, welded by heat.\n\n" +
                   "Iron spread finely and evenly through\nits matrix oxidised to hematite, but less\nof it: an even reddish brown, no pattern.\n\n" +
                   "Its grains still show, yet it breaks\nsmoothly across faint inclined layers;\nrare biotite flakes grew in the heat.\n\n" +
                   "Already dewatered by metamorphism,\nit had little left to give as gas." },
  /*  9 */ { general: true, title: "Stone, unfinished",
             model: "models/lava_4.glb",   // a small lava rock marks this point on the clock
             text: "Nothing is finished.\nStone is only a pause in change.\n\n" +
                   "We read time not in seconds\nbut in colour, fracture, breath:\niron blushing red, water leaving,\nglass swelling around a sigh of gas.\n\n" +
                   "Heat does not destroy; it reveals.\nEvery form is a stage,\nevery stage a form.\n\n" +
                   "Metamorphosis is the only clock." },
  /* 10 */ { name: "Biotite-plagioclase schist", subtitle: "", img: "", before: "", after: "",
             model: "models/10oclock.glb", modelBefore: "models/10oclock.glb", modelAfter: "models/10oclock_ghost.glb",   // built from the photo sheet
             text: "Biotite, K(Mg,Fe)₃AlSi₃O₁₀(OH)₂, set in\nplagioclase and quartz, both harder\nthan steel (Mohs 6–7).\n\n" +
                   "Above ~500 °C biotite's Fe²⁺ oxidises\nto Fe³⁺, shedding hydrogen (oxybiotite);\nlittle iron is freed, so faint hematite\ngives only a very pale red.\n\n" +
                   "The oxidised mica's cleavage sheets\npart slightly: flakes flash brighter,\nedges glint bronze-brown.\n\n" +
                   "Water held only as biotite's OH,\nreleased above ~800 °C: little gas." },
  /* 11 */ { name: "Granitic gneiss", subtitle: "", img: "", before: "", after: "",
             model: "models/11oclock.glb", modelBefore: "models/11oclock.glb", modelAfter: "models/11oclock_ghost.glb",   // built from the photo sheet
             text: "Granitic gneiss: quartz, feldspar, mica\nand biotite, pressed into bands.\n\n" +
                   "Iron from biotite and grain-edge films\noxidises to fine hematite: a pale red.\nTrace Fe³⁺ in feldspar forms hematite\nspecks, blushing the white to soft pink.\n\n" +
                   "Biotite darkens as its Fe²⁺ oxidises, while\nquartz clouds at its 573 °C inversion:\nthe bands sharpen.\n\n" +
                   "Fluid inclusions in quartz, H₂O and CO₂,\nburst between 300 and 600 °C:\nsmall bubbles, clear as their gas." },
];
