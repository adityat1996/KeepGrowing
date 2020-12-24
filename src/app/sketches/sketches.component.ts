import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.css']
})
export class SketchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNameArray: Array<string> = [
    "013011carter_boatwright.png",
    "021.jpg",
    "040.JPG",
    "040908sketches.jpg",
    "05_character_sketches.jpg",
    "1098893920_897193148b_o.jpg",
    "10_Assassins_Creed_2.jpg",
    "111a1aa11.jpg",
    "1249571268721662.jpg",
    "129986_Weapons__Thing_Thing_Style.jpg",
    "1308341851.jpg",
    "1347048863_b77baddb8a_o.jpg",
    "1586244-sketch_001_super.jpg",
    "1604000-iron_man2.0_sketch_2_super.jpg",
    "1982-Baron.jpg",
    "1Sketchbook-compilation.jpg",
    "2009_01_25_jacks_dad_net.jpg",
    "2010-Ram_Man.jpg",
    "20100330_spider-man.jpg",
    "2011-11-19-Mauro-Vargas-Hannibal-armor-sketches.jpg",
    "2013-Iron-Man-3-HD-Wallpaper.jpg",
    "21.jpg",
    "219207-Royalty-Free-RF-Clipart-Illustration-Of-A-Sketched-Soldier-Walking-With-A-Wepon-In-Arm.jpg",
    "2437092512_861774bf1e.jpg",
    "2469489335_75804d3e7d_o.jpg",
    "2A_SuperDoc.jpg",
    "2cg0hdu.jpg",
    "2k9kitfisto1.jpg",
    "2savageslarge.jpg",
    "300dpi Batman_Tim Sale_HeroesCon2006.jpg",
    "394133_3058699316695_1539754918_3012712_27487412_n.jpg",
    "3E_SplinterCell_final.jpg",
    "404723_3073471525991_1539754918_3019644_1123800580_n.jpg",
    "404900_3058888801432_1539754918_3012808_1110488262_n.jpg",
    "4360764934_aab4dd85bb.jpg",
    "44UCVJS6UB5T3FWGJNOFRZCFQT4ZUW7X.preview.png",
    "452452-6248239-setteiscuba1.jpg",
    "4885710568_33502423d5_b.jpg",
    "4982261143_12f109fa39.jpg",
    "4982864490_f192486326.jpg",
    "4be8afbbcd9e5.jpg",
    "5169864208_9cb6c51962.jpg",
    "519423-9237983-kakashihank.jpg",
    "5khe1h.jpg",
    "65-Batman-StyleA1-TS1.jpg",
    "6720966521_cc8cac4898.jpg",
    "6720971133_83cd01c845.jpg",
    "6924_143873848296_637468296_2628896_31779_n.jpg",
    "7035348581_e6604a59d3.jpg",
    "70sbat2.jpg",
    "765_stream.jpg",
    "772711476ironmanconceptart.jpg",
    "93643_1_lg.jpg",
    "9624006-arm-muscles-sketch-mans-hand-on-white.jpg",
    "ace-sketch.jpg",
    "Adam-Teela.jpg",
    "adam.jpg",
    "ae_sketch.jpg",
    "airmansketches.jpg",
    "alien-armor.jpg",
    "alien_sketch.jpg",
    "alzorathchow35x90cyanwipin2.jpg",
    "Amor - Memorial-Man concept sketch.jpg",
    "arkham___armored___batman_wips__by_chuckdee-d359026.jpg",
    "armor-450x328.jpg",
    "armordesign01.jpg",
    "armor_design_sketch_by_BigRobot.jpg",
    "armour 2.jpeg",
    "Armour Sketches.jpg",
    "armour.gif",
    "armour.jpeg",
    "armour.jpg",
    "armour2.jpg",
    "Armour_Design_sketch_by_Megas_SF.jpg",
    "ARsketchbook1176.jpg",
    "art-ogre.jpg",
    "art-pike.jpg",
    "Art2.jpg",
    "ash_sketch_2_by_thenota.jpg",
    "Assassin_s Creed 2.jpg",
    "assassin__s_creed_altair_sketch_by_shadow_stride-d3cyut1.jpg",
    "Assemble007.jpg",
    "Autobot_Jets_Sketches01.jpg",
    "A_Sniper_Sketches01.jpg",
    "Back Muscles (pencil).jpg",
    "Batman sketch01.jpg",
    "batman sketches.jpg",
    "Batman-Arkham Asylum.jpg",
    "batman-arkham-asylum-character-artwork.jpg",
    "Batman-Batgirl-Robin-rough-sketch.jpg",
    "batman-sketch-albuquerque2.jpg",
    "Batman-Year-One-concepts.jpg",
    "Batman.JPG",
    "batman2-0_01.jpg",
    "batman5.gif",
    "batmanl.jpg",
    "BatmanSketch07.gif",
    "batman_arkham_city_wallpaper_01.jpg",
    "batman_armour_by_Patrick_Hennings.jpg",
    "batman_sketch2_full.jpg",
    "BATMAN_SKETCHES__pt_2__by_madlabsstudio.jpg",
    "Batman_Sketch_Jim_Lee_inspired_by_viemdi.jpg",
    "BATMAN_TURNAROUND_72DPI.JPG",
    "Battery-v1b2.2.11.jpg",
    "battlespace_snakeeyes_sketc.jpg",
    "battlespace_ss_sketc2.jpg",
    "Battle_Armor_by_Kaiii.jpg",
    "bat_sketch.jpg",
    "Beast_Sketch_Transformations_by_RageVX.png",
    "Beau_zombie_buddy_sketch_net.jpg",
    "bel4.jpg",
    "be_paladin_sketch.jpg",
    "blackguard.jpg",
    "BlazingSkull.jpg",
    "bochspykuallstand.jpg",
    "BossSketches.jpg",
    "BOS_Armor.JPG",
    "Broly__Super_Saiyan_4_lineart__by_Saiyakupo.jpg",
    "Brute_sketch_by_eWKn.jpg",
    "Bugglefug_sketch_001.jpg",
    "Buzzer_pencil_lowres.jpg",
    "BuzzOffHybrid1.jpg",
    "CapAmerica01.jpg",
    "capfanart1.jpg",
    "captain_america.jpg",
    "captain_commando_sketch_by_ahxkim.jpg",
    "capw.jpg",
    "car-sketch 1.jpg",
    "car-sketch.jpg",
    "carnage-sketch-tim-odom.jpg",
    "carstenbiernat_colossus_ske.jpg",
    "carstenbiernat_nightcrawler.jpg",
    "carstenbiernat_wolverine_sk.jpg",
    "car_sketches2.jpg",
    "car_sketch_1_by_Insomni_Design.jpg",
    "Car_Sketch_by_ya3.jpg",
    "CastleGrayskullbackgroundinks.jpg",
    "cast_specspidey184.jpg",
    "cb-dds2.jpg",
    "CD_07_Turnarounds - Male Figure Muscular 1_jpg.jpg",
    "centurion2002-4.jpg",
    "charon2.jpg",
    "chow 194 robin hood sketch 1b.jpg",
    "ClassicClawful.jpg",
    "Classics_Soundwave.jpg",
    "Cloud_Strife_Sketch.png",
    "CobraTrooper.jpg",
    "Cobra_Commander_sketch.jpg",
    "Cobra_Trooper_lowres.jpg",
    "codys_xl_sketch_1.jpg",
    "CpzBqOMr4g4f6tlpTUQUNchTo1_500.jpg",
    "CpzBqOMr4g4fa7x9Rgqfxcsio1_500.jpg",
    "crapola_sketch_by_yjianlong.jpg",
    "crappy-batman-sketch-a530f86b5.jpg",
    "creed_straps.jpg",
    "Crysis_soldier_by_Artbysai.jpg",
    "Cyclops.jpg",
    "DAILY_SKETCH_Man_E_Faces_by_DeathWind13.jpg",
    "DAILY_SKETCH_Stratos_by_DeathWind13.jpg",
    "daredevil final 2.jpg",
    "daredevil.jpg",
    "Daredevili.jpg",
    "dark-new-world-zombie-comic-andrew-martinez-sketch-ralph-contreras-04.jpg",
    "dark-new-world-zombie-comic-andrew-martinez-sketch-ralph-contreras-05.jpg",
    "Dark-New-World-Zombie-Comic-Carnies-06.jpg",
    "dbz_charaters_sketches_by_cangdu-d5bgudi.jpg",
    "dbz_realistic_sketches_by_masterofelements-d4dk4j2.jpg",
    "DBZ__cooler_by_FiendOFDA.jpg",
    "Deadpool.jpg",
    "deadpoolsssssss.jpeg",
    "deathlok.jpg",
    "DEATHManSketch.jpg",
    "deity pin up for blog.jpg",
    "Demon sketch book07-Bob Wiacek-grey.jpg",
    "Destro_swordgun_pencil_lowres.jpg",
    "detail.jpg",
    "dethmek.gif",
    "deus_ex__human_revolution_by_darkfurianx-d3afhm9.png",
    "deus_ex__human_revolution___sarif_industries_by_tecman-d4fpruf.jpg",
    "dfu.jpg",
    "Dom-Halo.jpg",
    "dospex2-01.jpg",
    "Dragonborn_Armor_Sketches.jpg",
    "dragon_armor_sketches_by_foreverzerodragon-d2z86xt.jpg",
    "dragon_ball_sketches_by_sassie_kay-d5ycxtz.jpg",
    "Drake.jpg",
    "drake_owen__super_hero_sketch_by_minipicaso-d3k7iiv.png",
    "Drawing-Jam-Arnold.jpg",
    "DSC00344.jpg",
    "DucatiProject0803_thumb.jpg",
    "ducati_streetfighter_sketch_3.jpg",
    "DukeRoadblock.jpg",
    "Dusty_GI_JOE_by_ratkins.jpg",
    "dusty_medal_of_honor_by_blera_acidsnake-d33nu3m.jpg",
    "DU_Human.jpg",
    "DW_Armor_002.jpg",
    "dxhr-designed-cover.jpg",
    "e91e5e57b2bbc72aa3ee0f8f7f790444-soldier.png",
    "Earth-One-Clark-Kent-Sketch.jpg",
    "ecto_sketch_sm-728695.jpg",
    "ed_piggyback.png",
    "elf2.jpg",
    "Enforcers-Helmet.jpg",
    "EpicWeapons.jpg",
    "esh1.gif",
    "expandinghorizon1.jpg",
    "ExSpy-300x271.jpg",
    "Farmhouse01.jpg",
    "fear_nekkid.gif",
    "feather2sketch.jpg",
    "FenixPencilWeb.jpg",
    "fighter_by_daniel_macgregor.jpg",
    "fighting_pilgrim.jpg",
    "Final_Compositional_Sketch.jpg",
    "First-sketches-of-new-Husqvarna-900-streetbike.jpg",
    "Fisto.jpg",
    "flat,550x550,075,f.jpg",
    "Flint_lowres.jpg",
    "from_Carlo_Pagulayan_by_force2reckon.jpg",
    "fullae0.jpg",
    "Gears_Of_War_Sketches_by_mullet2dmax.jpg",
    "Gears_of_War__ME__by_fuji.jpg",
    "Gemini.jpg",
    "german-soldier.jpg",
    "gideon-costume-1.jpg",
    "gijoe3.jpg",
    "GI_Joe_Duke_Roadblock_BW_Inked_by_Lazy_Doodler.jpg",
    "gotenks__ngt__sketch_lineart_by_krizeii-d5sxo3t.jpg",
    "gow_animated_practice_1.jpg",
    "gp_hero.jpg",
    "grimmcreeper-021.jpg",
    "Grimstone.jpg",
    "guns of gears of war game.jpg",
    "guns001.jpg",
    "guns_w.jpg",
    "gun_sketch.jpg",
    "G_I__Joe_Original_13_Sketch_by_Nickofdoom.jpg",
    "halo4.jpg",
    "haps1_sm-764701.jpg",
    "Hatter.jpg",
    "HawkeyeHeroesCon2010.jpg",
    "he  man.jpg",
    "he-man-she-ra-2.jpg",
    "he-man-sorceress.jpg",
    "headshots.jpg",
    "heli_sketches.jpg",
    "hellboycopy.jpg",
    "Heman-battlecat.jpg",
    "heman002.jpg",
    "heman_sketch_inks.jpg",
    "He_Man_bw_by_badworldsolace.jpg",
    "He_Man_by__vassago_.jpg",
    "he_man_sketch_by_2ajoe-d2xvw4n.jpg",
    "He_man_Sketch_step_1_Tutorial_by_Anmph.jpg",
    "He_Man___Fisto_by_Wolf_Signs.jpg",
    "hhuniforms1.jpg",
    "hordak.gif",
    "hordak.jpg",
    "Horde-Trooper.jpg",
    "hotrod3eetfw.jpg",
    "Hourman.jpg",
    "how-to-draw-soldiers-step-24.jpg",
    "howtopaintrampagelc3.gif",
    "humans.jpg",
    "Human_Body_Sketches.jpg",
    "i1031620-5.jpg",
    "ikari_warriors_sketch_by_karen_karol-d4i0c19.jpg",
    "ikari_warriors_team_sketch_by_karen_karol-d377bun.jpg",
    "images.jpeg",
    "images.jpg",
    "img007dgh.jpg",
    "IMG_1048a1 old sketch.JPG",
    "img_show.jpg",
    "Inertial1web.jpg",
    "Iron-Man-3-soon-to-hit-theaters.jpg",
    "Iron-Man-3-Wallpaper-For-PC.jpg",
    "iron-man-sketch001.jpg",
    "ironman-sketches2007.jpg",
    "Iron_Man_sketch_by_anthonyharrissketch.jpg",
    "IRON_MAN_sketch_by_Guidoarts.jpg",
    "iron_man__sketches_by_marinemantis3ye-d31iyau.jpg",
    "Isaac_Sketch.jpg",
    "Jade_Jaguar_Character_Sketches_by_ThunderCat78.jpg",
    "jadjad.jpeg",
    "jakejazz2.jpg",
    "jbf1LsxRyoqkq5k9ckZ16oXNo1_1280.jpg",
    "Jet sketch.jpg",
    "Jitsurough1.jpg",
    "jju.jpeg",
    "John-Battle-Robot.jpg",
    "John-imaginary_weapon.jpg",
    "John-Iron-Man.jpg",
    "John-Knight-Armor-on-Horse.jpg",
    "John-Terminator.jpg",
    "just-sketch-2.jpg",
    "kaahn_sketch1.jpg",
    "KaRyygel-Colour.jpg",
    "kc_superman.jpg",
    "ken.jpg",
    "Ken_Illustration1.jpg",
    "Ken_Sketch_by_iFreeze.jpg",
    "King-Grayskull.jpg",
    "Korra_and_her_father.png",
    "KurosawaBlah.jpg",
    "kwhiteford_worfeskt01.jpg",
    "LaForceSketch.jpg",
    "lamborghini_gallardo_coloring_page_12133.gif",
    "LEGIONOFSUPER-HEROES_Mon-El-by-Jim_sjkhdaf8d7f90a.jpg",
    "leonardosketch1000.jpg",
    "like_whoa_huge_dbz_sketch_page_by_siegeredwolf-d2ymgax.jpg",
    "link for poems.txt",
    "lololololo.jpeg",
    "lolx.jpg",
    "Lotus_Esprit_2013_new_model_rear_view_James_Bond_007.jpg",
    "LowLight.jpg",
    "LtFalcon.jpg",
    "LukeCage.jpg",
    "MadMax.jpg",
    "magic-kid-v1b11.jpg",
    "magic-kid-v1b21.jpg",
    "magmight_by_Francine_by_Patreek.jpg",
    "malebackdrop_9heads.jpg",
    "man-at-arms.jpg",
    "Man-bat_model_sheet_paste-up.jpg",
    "man-body-sketch.jpg",
    "man-e-faces0_full.jpg",
    "ManAtArms.jpg",
    "Mantic-Games-Corporation-Troopers-2.jpg",
    "Mantic-Games-Corporation-Troopers-4.jpg",
    "ManVsSkel.jpg",
    "man_sketch_by_Luisklt.jpg",
    "MarsArmorsm.gif",
    "Marvel_Heroes_Sketches_by_MCornelius.jpg",
    "medium_armored_trooper.jpg",
    "Men-e-Faces-vs-Beast-Man.jpg",
    "Mer-Man.jpg",
    "merc_concept.jpg",
    "MG-NAVY-coat-2011-fall3-501x650.png",
    "mgs-sketch21-soldier.gif",
    "Michael Turner Sketchbook Spider-Man Batman 2008 New York Comicon (Interior P9 Batman Sketch).png",
    "MikeWieringo_AQUAMAN.jpg",
    "minion_one.jpg",
    "MiracleMan-sketch.jpg",
    "missionary_man_sketch_by_mytherea-d3btapc.jpg",
    "MMA_sketches_by_Scadilla.jpg",
    "MM___Adv_Giant_Robot_Sketch_by_zandstra.jpg",
    "moderntroops0001.jpg",
    "moderntroops0002.jpg",
    "MOTU character sketch 2.jpg",
    "MOTU headshots sketch 72.jpg",
    "MOTU___Clawful_by_RubusTheBarbarian.jpg",
    "MOTU___Stratos_by_RubusTheBarbarian.jpg",
    "mount-gray-and-wolverine-pass-kootenay-national-park-british-columbia-wallpapers.1600x900.jpg",
    "MP5K_sketch_1.png",
    "mtgcom_arcana_356_pic1_en.jpg",
    "muscle-sketch-group-05-08.jpg",
    "muscles.jpg",
    "musclesketch.jpg",
    "Muscular_Body_Sketch_by_SixArmedWerewolf.jpg",
    "my_drawing_of_ssj_4_vegeta_by_unclestanky-d30qrvg.jpg",
    "Naruto.jpg",
    "negative_man_sketch_by_davidskeleton-d3cuwa4.jpg",
    "nemesissketch.jpg",
    "newac_lineup.jpg",
    "New_Warriors_Sketch_by_raheight.jpg",
    "nicholsmagnussketch.jpg",
    "nick_fury_site.jpg",
    "ninjor2.jpg",
    "ninjor3.jpg",
    "not_batman_sketches_ii_by_vermithrax40-d2xvy00.jpg",
    "NovaPrime_variousmodes.jpg",
    "no_face_man.jpg",
    "oct_thumb_400.jpg",
    "oh_chance_by_nolandis.jpg",
    "old_raiden_2____sketch___by_urufei_chopsticks-d5kz4r2.png",
    "Omigah_I_drew_SWAT_Kats_D__by_XtreamCrazy.jpg",
    "OoklatheMok.jpg",
    "orc_narnia.jpg",
    "orelovposebwfinal.jpg",
    "original_45080_Q9XAQAbmXKwVM5G4KSWP9i_XQ.jpg",
    "Panthro_Sketch_1_by_ThunderCat78.jpg",
    "parade_soldier.jpg",
    "pe9-Armour.jpg",
    "penciljackmuscle2_2.jpg",
    "Pencil_sketch.jpg",
    "Peterson Bat medium.jpg",
    "phantom.jpg",
    "piccolo.png",
    "plane-transformers.gif",
    "pophead.jpg",
    "Power-Man-Iron-Fist-Batman-1984-head-sketches.jpg",
    "power_armor.jpg",
    "power_armor_energywhip.jpg",
    "power_armor_sketches_toodamnandroidish.jpg",
    "Power_Armour_drawing_by_winds_of_chaos.jpg",
    "Predator_II_by_FujiiWho.jpg",
    "Predator_Sketches_by_ButtZilla.jpg",
    "Prime_2_inked.jpg",
    "prowlersketch.jpg",
    "PRVW-BruceTimm.jpg",
    "ps-front-sketch.jpg",
    "PUNISHER.jpg",
    "Punisher0.jpg",
    "punisherthehero.jpg",
    "PZO1115-InquisitorSketch.jpg",
    "QuicksilverSilverhawksinks.jpg",
    "RAHeights_Robin_Sketch__inked__by_artsketchstudios.jpg",
    "Random_sketches.png",
    "RazorSwatKatsinks.jpg",
    "redec_sketches_cartoon_crobards_5.jpg",
    "redec_sketches_misc_Iron_Man_rough.jpg",
    "RedNinja_pencil_lowres.jpg",
    "RedRobinPencils(Marcus To).jpg",
    "Red_Robin_Unmasked_sketch_by_Chizel_Man.jpg",
    "Reflector_sketches_by_Guidoart_1217877139.jpg",
    "ripcord-3s.jpg",
    "roadblock-s.jpg",
    "Robin_Redesign.jpg",
    "Robin_Sketch_by_Kenpudiosaki.jpg",
    "Robo sample sketch2.jpg",
    "Robo Sketches1.jpg",
    "RobocopDesignsketches.jpg",
    "Robopocalypse.jpg",
    "robots thumbs_sketch.jpg",
    "RobotV1.jpg",
    "robot_sketches_by_tat88.jpg",
    "robot_sketch_by_TSIB.jpg",
    "robot_sketch_full.png",
    "RoughSketch_TwoBad_N_Co__by_royalentertainment.jpg",
    "rs001.jpg",
    "running_man_action_sketch1.jpg",
    "s320x240.jpeg",
    "SA-He-Man.jpg",
    "SAD044.jpg",
    "sad52.jpg",
    "SAGA_Uncle_Dirtnap_sketch.jpg",
    "Sandrine reading.png",
    "scan0003.jpg",
    "scan0004-1.jpg",
    "scan051web.jpg",
    "scan999.jpg",
    "Scare-glow-Skeletor.jpg",
    "Scout_Armour.gif",
    "Serpentor_E.jpg",
    "sfz1_sketch_Sagat_Go.gif",
    "sk-batman.jpg",
    "Skaar_sketches001.jpg",
    "Skaldor_sans_shield_by_Patreek.jpg",
    "skchs1e.jpg",
    "ske.jpg",
    "skeeee.jpeg",
    "Skeletor-and-Evil-Lyn.jpg",
    "Skeletor-wins.jpg",
    "sketch #1 ss he-man FINAL.jpg",
    "sketch #3 tri-klops FINAL.jpg",
    "sketch #7 skeletor FINAL.jpg",
    "Sketch 37-Capitan Marvel-Doug Braithwaite--Narnia Fumetto-04.09.10.jpg",
    "sketch page muscles.jpg",
    "sketch-4.png",
    "sketch-a-day-137.jpg",
    "sketch-batman.jpg_600.jpg",
    "sketch-Colossus.jpg_600.jpg",
    "sketch-PowerMan1982.jpg_600.jpg",
    "sketch.jpg",
    "Sketch01.jpg",
    "sketch2.gif",
    "sketch2man-e-facesfinal_full.jpg",
    "sketch5rattlorfinal_full.jpg",
    "sketchbook_cartoons_01.jpg",
    "sketches_batmankill_big.jpg",
    "Sketches_by_TheOneKnownAsBob.jpg",
    "sketches_sf_characters24.jpg",
    "sketchgrouprj8.jpg",
    "sketchpage3.jpg",
    "sketch_0131.jpg",
    "Sketch_15.jpg",
    "Sketch_2008.05.18_1.jpg",
    "sketch_armor_MD.jpg",
    "sketch_byonic_man_TUT_small.png",
    "sketch_orge_warrior_by_lidong.jpg",
    "sketch_superman_hulk_batman_dbz_by_dbzwarrior-d57teyo.jpg",
    "Sketch__Batman_and_Robin_by_thincage.jpg",
    "Sky_Car_Sketch_by_MeckanicalMind.jpg",
    "smgv2.jpg",
    "smoking-soldier-sketch.jpg",
    "snake-eyes-s.jpg",
    "Snake-Men-and-Skeletor.jpg",
    "SnakeEyesMK2Uko.jpg",
    "Snake_Eyes_lowres.jpg",
    "snake_eyes_sketch_by_covens_oz-d2ys84k.jpg",
    "Snikt.jpg",
    "Sniper_rifle_Rail_gun_Sketches_by_grimrecka.jpg",
    "Sniper_Rifle_System_99_Anti-Matériel_image.png",
    "snow-sharks-cartoon.jpg",
    "soldier design sketch.jpg",
    "soldier-comission1.jpg",
    "soldier.jpg",
    "soldiers-1.jpg",
    "soldiers-2.jpg",
    "soldiers_character_sketch_by_quietsorcerer-d2zdgpl.jpg",
    "soldiers_sketch_by_steel123-d32kygu.jpg",
    "soldier_armor_school_sketches_by_CrashyBandicoot.jpg",
    "Sol_Concept_4.jpg",
    "SomeJimLeeOmegaRedConceptSketches.jpg",
    "sp.gif",
    "SpaceJam1.jpg",
    "space_samurai_floating_armor_sketch.jpg",
    "spawn2kq.jpg",
    "spiderman_sketches.jpg",
    "SplinterCells_sketch_1___base_by_ServantofKain.jpg",
    "spy_sniper_sketch_commission_3_by_littlemeesh-d3fxdwx.png.jpeg",
    "Squeeeze.jpg",
    "Staff_Sketches_Characters.jpg",
    "Stalker.jpg",
    "stallone_the_expendables_by_daztibbles-d4aakp5.jpg",
    "standard_large.jpg",
    "stock-vector-vector-sketch-man-portrait-44567404.jpg",
    "stormshadow-s.jpg",
    "Storm_Shadow_lowres.jpg",
    "Stratos.jpg",
    "street-fighter-sketches.jpg",
    "superboy_and_robin__sketch__by_pepsikayla-d3e3ocr.png",
    "superman0se.jpg",
    "superman_2007_web.jpg",
    "Super_Robot_Sitting_Sketch_by_SamuraiSquirrel.jpg",
    "Super_Street_Fighter_II_X_Art_.jpg",
    "swat.jpg",
    "swatkats01.jpg",
    "swattsss.php",
    "swat_cats_by_silk_ward-d367auw.jpg",
    "SWAT_Kats_by_TigerShinigami.jpg",
    "Swat_Kats_Chance_and_Jake_by_Tigerfog.jpg",
    "Swat_Kats_v3.JPG",
    "Swat_Kats___Jake_Clawson_by_Lomebririon.jpg",
    "swat_large.jpg",
    "switchman-goldenage-v1b11.jpg",
    "switchman-goldenage-v1b21.jpg",
    "switchman-goldenage-v1b3a1.jpg",
    "switchman-silverage-v1b21.jpg",
    "switchman-silverage-v1b2r11.jpg",
    "swk.jpeg",
    "swkat.jpeg",
    "sy-klone2.jpg",
    "t600.jpg",
    "tbone_prisoner.png",
    "Terminator1.jpg",
    "Terror-cottarough.jpg",
    "the-big-three.jpg",
    "the-dark-knight-wallpaper-4-12442.jpg",
    "The-Snake-Men.jpg",
    "thomasmaximus_armorconcept.jpg",
    "Thug01.jpg",
    "Thug02.jpg",
    "Thumbs.db",
    "ThunderCats_by_DaveBullock-540x417.jpg",
    "ThunderCats_Lion_O_by_CaseyJonesDA.jpg",
    "titans_0208.gif",
    "Toasty_____by_blackswordsman28.jpg",
    "toyota_10.jpg",
    "Transformers_Head_Sketches_by_SheldonGoh.jpg",
    "Transformers_Sketches_I_by_xXTransformersGirlXx.jpg",
    "Tri-Klops.jpg",
    "TrinityPortfolio_BM.jpg",
    "tumblr_kokzuuG8M81qze2m9o1_1280.jpg",
    "tumblr_kol3zj6vkC1qze2m9o1_500.jpg",
    "tumblr_kowz8e2Fga1qze2m9o1_500.jpg",
    "tumblr_kr54pd6fW71qze2m9o1_500.jpg",
    "tumblr_l78ulrJF6t1qze2m9o1_500.jpg",
    "tumblr_l8vxdyFzvH1qze2m9o1_500.jpg",
    "tumblr_ln0ns3hscX1qhr3djo1_500.jpg",
    "tumblr_loqc5mcSin1qkdez7o1_50110.jpg",
    "tumblr_ls1wpdrE5I1qbx8uqo1_500.jpg",
    "tumblr_ls51v66EhL1qc79gv.jpg",
    "tumblr_ltrtqhE8ps1qb396lo1_500.jpg",
    "tumblr_lu2a2g1FEa1r3172eo1_500.jpg",
    "tumblr_lw2gw6erYy1qengqso1_500.jpg",
    "tumblr_lw5aqxaXWz1qk0c9so1_500.jpg",
    "tumblr_m0w0kajilJ1r0r9nd.png",
    "tumblr_m7rx6oqznr1rcq57co1_1280.jpg",
    "TunnelRat.jpg",
    "tweener.jpg",
    "tyrionlannister-character-sketch.jpg",
    "ultimate_avengers_sketch_by_khazen-d3484qw.jpg",
    "Ultron.jpg",
    "Underwater-Warrior_version2.jpg",
    "Universal_Soldier_by_croaky.jpg",
    "url.jpeg",
    "user2511_1161363588.JPG",
    "vjydstxgly.bmp",
    "wall_sketch.jpg",
    "warrior.jpg",
    "warriors_three.jpg",
    "WeaponsOverview_concept_arts.jpg",
    "whilce.sketch.01.lg.jpg",
    "WhiplashClassic-1.jpg",
    "willy_jeep_sketch_by_spetsnazmelayu.jpg",
    "WIP_Character_Armour_by_Notorious_Nerd.jpg",
    "wolfman.jpg",
    "wolv2.jpg",
    "wolverine-sketch-anthony-jensen.jpg",
    "wolverinebw01b.jpg",
    "WolverineSpidermanSketch.jpg",
    "wolverine_pencils_web.jpg",
    "wolverine_sketch.jpg",
    "wolverine_sketch1.jpg",
    "Wu_Kong_Sun.jpg",
    "xarkon_armor.png",
    "xmenonehalf.jpg",
    "xomanowar01_nordcover.jpg",
    "Zartan.jpg",
    "ZodacMovie2.jpg",
    "ZombieSuit_rough.png"
  ];
}
