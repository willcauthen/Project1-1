var express = require('express');
var request = require('request');
var app     = express();
var mongoose = require("mongoose");
var db = require('./models');


var keyword=['general'];
var title1= "Aloe vera";
//var content1="Aloe vera (also called aloe barbadensis) is a popular houseplant grown on windowsills around the world. Cut through the thick, serrated leaf of the aloe and it will immediately ooze clear gel. This gel is used as a treatment for sunburn, minor burns, cuts and skin irritations. Aloe speeds healing of first-and second-degree burns, too, cutting healing time by nearly nine days, according to a review conducted in Thailand in 2007.  It also shows promise for easing the red, scaly skin patches of mild to moderate psoriasis.Some use aloe directly from the plant itself; others purchase products from the pharmacy that are made with aloe. Keep an aloe plant on a sunny windowsill, cut off a piece of a leaf and squeeze the gel onto minor skin irritations. Or buy an aloe vera skin cream, lotion or ointment—ideally one bearing the International Aloe Science Council’s certification seal.The secret is the gel inside aloe’s spiky leaves. Spread on the skin, it hydrates and protects while the body repairs damage—and speeds healing, possibly by improving circulation and encouraging new skin cells to move up into areas that need repairs. In one study from the then Pennsylvania College of Podiatric Medicine, wounds treated with aloe vera decreased in size by 50 percent over seven days, compared to 25 percent for a cream without aloe vera. Aloe is not to be taken internally. Studies conducted by the US National Toxicology Program found evidence it may be carcinogenic; it can also cause stomach cramping and diarrhoea, interfere with absorption of medications and even cause liver inflammation. Aloe vera has an exotic, aristocratic and ancient pedigree as a skin balm, dating back more than 6000 years. Aloe vera is depicted in stone carvings and papyrus scrolls, was a common burial gift to deceased pharaohs and a widely used remedy for everything from boils and acne to hair loss and hemorrhoids. Cleopatra and Queen Nefertiti used it to enhance their legendary beauty, too."
var link1="http://www.besthealthmag.ca/best-you/home-remedies/aloe-vera-health-benefits-and-uses#S6rFaoYcYe3bLd1a.99"

var title2="Calluses and corns"
/*var content2="When your body tries to defend itself from injury, it sometimes creates strange armour. The outermost layer of skin piles up a thick fortress of dead cells whenever it’s rubbed too much or too often. That’s what happens when an ill-fitting shoe keeps rubbing the same toe, or a metal-handled rake puts friction on the inside of your thumb. The epidermis gradually builds up a callus. That, in turn, can evolve into a corn, which is simply a callus with a hard core. Calluses on the hands and feet can be painless and protective. But if a callus or corn presses on a bone or nerve underneath your three layers of skin, it can be as painful as a pebble between your toes.(What you can do)
If a callus is causing you pain or aggravation, you need to scrape away some of those dead cells so the callus won’t put so much pressure on your nerves. Immediately after a warm shower or bath, when your skin is wet and softened, rub a pumice stone on the callus to remove dead cells. A pumice stone is simply a rough piece of volcanic mineral. Don’t try to grind the whole callus away in one sitting, as you’ll rub your skin raw. Instead, sand it down a little every day, and be patient. If the callus is very thick or hard, the sanding project might take a few weeks.
For what are called “soft corns,” use an emery board. Soft corns occur between your toes. They arise when the bones in adjacent toes rub until the skin thickens. A pumice stone won’t fit in that tight space between toes. Instead, purchase the same kind of emery board that’s designed to pare down fingernails and file away a little bit after every bath.
Instead of filing corns and calluses, you can soak and moisturize them until they grow soft. For corns on your toes, use castor oil as a softener with a corn pad as protector. To protect the corn, you want nonmedicated, doughnut-shaped pads, sold at pharmacies. Place one of these pads around the corn, dab a few drops of castor oil onto the corn with a cotton swab, then put adhesive tape over the top of the pad to hold it in place. The little padded doughnut encircles the corn and shields it from pressure while also holding in the moisturizing castor oil. (Since the castor oil can leak out through the bandage, causing stains, wear some old socks when you’re using this treatment.)
To help protect a callus or corn on your foot from pressure, custom-design a protective “doughnut” using a piece of adhesive moleskin. Cut a circle larger than your callus or corn, fold it in half, and cut a half-circle in the centre. When you open it up, you’ll have a padded ring. Apply it over your corn or callus.
Try socks that have very thick, cushioned soles. They could keep your calluses from getting worse.
Choose shoes that fit well. You should have a thumb’s width of distance between your longest toe and the end of the shoe. Shoes should be wide enough so that your toes and the balls of your feet aren’t cramped from side to side. If shoes are too roomy, your feet slide around and rub against the sides.(A natural boost)
Another good way to soften calluses and corns is to soak them in water containing Epsom salt. Follow the directions on the package.
Stalk the corn with acid. One source of salicylic acid is plain old aspirin. To create your own corn-softening compound, crush five aspirin until they turn into a fine powder. Mix the powder thoroughly with one-half teaspoon of lemon juice and one-half teaspoon water. Dab the paste onto the thickened skin, circle it with a piece of plastic wrap, then cover the plastic with a heated towel. Remove everything after 10 minutes and gently scrub away the loosened skin with a pumice stone."
*/
var title3="Sore throat"
/*var content3="A sore throat burns, feels scratchy and may cause pain that makes it hard to talk or swallow. The usual cause is a virus or bacteria, though throat irritation may also be caused by smoking, dry heat, postnasal drip or an allergic reaction. Try these sore throat remedies to feel better fast.
What you can do for a sore throat
• For fast and effective sore-throat relief, nothing beats an old-fashioned saltwater gargle. Salt acts as a mild antiseptic, and also draws water out of mucous membranes in the throat, which helps to clear phlegm. Dissolve a half-teaspoon salt in a glass of warm water, gargle and spit out. Repeat up to four times a day.
• Alternatively, gargle with a baking-soda solution. Dissolve one-half teaspoon of baking soda in a glass of warm water.
• Run a cool-mist vaporizer or humidifier in your bedroom. Adding moisture to the air will help keep the air from drying out and prevent the lining of your throat from becoming too dry. If you don’t have a humidifier, place a bowl of water on your radiator or heating vent each night. It will work as well as a store-bought device.
• Quit smoking. Cigarette smoke is extremely irritating to the lining of the throat. Breathe through your nose, rather than your mouth. It’s a natural way to humidify the air you breathe.
• If you’re plagued with a sore throat that seems to come back time and time again, buy a new toothbrush. Bacteria collect on the bristles, and if you injure your gums as you brush, they can enter your system and re-infect you.
• Bolster your immune system during cold and flu season with vitamins, herbs and good nutrition. The obvious supplement candidates are vitamins C and E, the minerals zinc and magnesium, and immune-boosting herbs such as goldenseal and astragalus. Also cook or supplement with garlic, ginger, shiitake mushrooms and reishi mushrooms, all of which have immune-boosting properties.
More sore throat remedies
• Honey has long been used as a sore-throat remedy. It has antibacterial properties, which can help speed healing. It also acts as a hypertonic osmotic, which means that it draws water out of inflamed tissue. This reduces the swelling and discomfort. Add several teaspoons to 1 cup of hot water or herbal tea.
• Hot lemonade with honey can also relieve pain. Combine the juice of half a lemon with hot water.
• Horehound reduces the swelling of inflamed throat tissue. It also thins mucus, which makes it easier for you to clear it from your throat. To make the tea, steep 2 teaspoons chopped herb in 1 cup boiling water for 10 minutes; strain and drink.
• Slippery elm contains mucilage that coats the throat and eases the soreness. Steep 1 teaspoon of the inner bark in 2 cups boiling water, strain and drink.
• Like slippery elm bark, marshmallow root (Althea officinalis) contains throat-coating mucilage. To make the tea, steep 2 teaspoons dried herb in 1 cup boiling water for 10 minutes; strain and drink. Drink three to five cups a day to help a sore throat.
• Take vitamin C three times a day. Whether your sore throat is caused by a cold, the flu or strep, this vitamin will help boost your immune system and fight off infection. Reduce the dose if you develop diarrhea.
• Echinacea. This herb’s antibacterial and antiviral properties will speed healing.
• Garlic, as another aid to fight off infection. Dried garlic has potent antibacterial and antiseptic properties.
• Zinc lozenge. In one study, people who sucked on a lozenge containing about 13 milligrams of zinc every two hours got rid of viral sore throats three to four days quicker than those who didn’t. But too much zinc can actually compromise immunity, which is why you shouldn’t take the lozenges for a long time.
"*/
var title4="Palpitations"
/*var content4="About 36 million times a year, your heart beats exactly when it’s supposed to. So why sweat it if your ticker occasionally marches to a different drummer? Because palpitations can be unnerving. Fortunately, there are ways to stop them almost as soon as they start. Better yet, prevent them from happening in the first place by practicing stress-reducing techniques, screening your medications, and adding some heart-healthy foods and supplements to your menu.
To calm a flutter
• As soon as you notice an irregular heartbeat, sit down and prop up your feet. Breathe slowly and deeply, letting your belly expand with each inhalation. If you focus on slow, steady breathing, your heartbeat will probably return to its normal rhythm right away.
• If the fluttering continues, do the Valsalva maneuver: Pinch your nose, close your mouth, then try to exhale. Since you can’t—because your nose and mouth are closed—you’ll bear down as if you were forcing a bowel movement (or pushing out a baby during childbirth). The brief rise in blood pressure that results should help reset your heart. The Valsalva technique is named after seventeenth-century Italian anatomist Antonio Maria Valsalva. 
• Cough forcefully. Like the Valsalva maneuver, coughing increases pressure inside your chest. Sometimes that’s all you need to restore your heart to its regular rhythm.
Get some water
• Take a few gulps of cold water. No one knows exactly why this helps, but some people get instant results. One theory is that the swallowed water causes your esophagus to press against your heart, and that nudge restores the rhythm.
• Alternatively, splash ice-cold water on your face. The shock might be enough to do the trick.
Eat, drink, and be moderate
• Eat plenty of fish. Salmon and mackerel in particular contain high levels of heart-healthy omega-3 fatty acids. 
• Avoid eating too much at one time. Forcing your body to digest a huge load of food diverts blood from your heart to your digestive tract. That can lead to palpitations. 
• Cut back on caffeine. In some people, drinking caffeinated coffee, tea, or soft drinks triggers palpitations.
Soothe stress and get sleep
• If you are experiencing palpitations, there is a good chance that stress is to blame. In fact, palpitations can be the body’s way of alerting you that your stress level has exceeded the safe range. Meditating helps get your stress level back down. So set aside 30 minutes each day just to let your body relax and your mind unwind. 
• Soothe yourself with aromatherapy. Sprinkle a few drops of relaxing lavender oil onto a handkerchief, and inhale the pleasant aroma. Or try rubbing two drops of bitter orange oil on your chest.
• Get at least seven hours of sleep each night. Being tired can set the stage for out-of-rhythm heartbeats.
Get moving
• Get at least 30 minutes of aerobic exercise three or four times a week. Walking, running, and tennis are all excellent choices. Just be sure you don’t become too focused on beating your previous time or outscoring an opponent—that will increase your stress. Exercise at a pace that allows you to comfortably carry on a conversation.
• Warm up for 10 minutes before each workout and for 10 minutes afterward.
Supplements that might help
• Many people with irregular heart rhythms are low on magnesium. So you might try taking 400 milligrams of magnesium twice a day. (Off-limits if you have kidney disease.)
• Take coenzyme Q10. This naturally occurring substance, sold over the counter in pill form, helps keep your heart rhythm regular, especially if you have heart disease. Take 150 milligrams once a day with food.
• If you’re not eating much fish, take 2 to 3 grams daily of cold-pressed marine fish oil, which is high in beneficial omega-3 fatty acids.
• The amino acid taurine helps quell irregular electrical impulses in the heart. Take 11⁄2 to 3 grams daily. Taurine is available by prescription.
Check your meds
• Many prescription and over-the-counter drugs can cause palpitations, so check the package insert. It might say something like: “Do not use this product if you have heart disease or high blood pressure.” Or it might give a specific warning about the drug’s effect on heartbeat. Pay close attention to over-the-counter cold and allergy medications that contain decongestants. One ingredient that is frequently implicated is pseudoephedrine. 
• Some bronchodilators for asthma, such as terbutaline (Bricanyl), can increase the risk of palpitations. So can antihistamines like loratadine (Claritin). If you’ve been taking these, ask your doctor about switching to different medications. 
• Avoid any diet remedy or supplement containing the ingredient ma huang, or ephedra. This can sharply increase your risk of irregular heartbeat or palpitations—sometimes with dangerous consequences.
• Always check with your doctor before adjusting medication or taking any new supplements.
"*/

var title5="Warts"
/*var content5="If you have a wart, it means the human papillomavirus (HPV) has invaded a tiny cut in your skin. HPV is really an umbrella term for many strains of a virus that can show up all over the body. Some types of warts are found singly, other times in clusters. Generally, the wart appears as a pale skin growth with a rough surface.
What you can do for warts
• Cover the wart with a small piece of duct tape. Cut a piece that will just cover the wart. Stick it on and leave it there for six days. When you take the tape off, soak the area in water for a few minutes, then use a disposable emery board or pumice stone to file down the dead, thick skin. Leave the wart uncovered overnight and apply a new patch in the morning. Repeat the procedure until you’re wart-free.
• Grind up a few vitamin C tablets, mix with enough water to make a paste and dab it onto your wart. Cover the paste with a bandage or tape. Because the tablets are highly acidic, they can help wear the wart away and also fight the virus itself.
• Be sure to dry off your wart after you wash, to reduce the chance of spreading the virus to someone else. When warts are wet, they seem to be more contagious.
• Don’t scratch or pick at warts. You can transfer the virus when you scratch other areas of skin.
A natural boost for warts
• Apply freshly crushed garlic directly to the wart and cover with a bandage. The caustic effect of the garlic will cause the wart to blister and fall off in as little as one week. Apply new garlic every day, avoiding contact with healthy surrounding skin. (Smearing the area around the wart with petroleum jelly can help.)
• Apply a compress or cotton ball soaked in vinegar and tape it down on the wart with an elastic bandage for at least one or two hours daily.
• Pull a dandelion from your yard, break the stem and squeeze some of its liquid onto your wart. Do this daily as needed. The sap is mildly irritating, so it stimulates your immune system to take care of the wart. Don’t use dandelions that have been treated with herbicides during the previous few years.
• If a piece of birch bark is available, dampen it with water and tape it over your wart with the inner side of the bark facing your skin. The bark contains salicylates, which are found in many over-the-counter wart treatments.
• You can also make a tea from powdered birch bark, available from health-food stores. Steep a teaspoon of bark in a cup of boiling water for 10 minutes, let it cool, soak a cloth in it and press it on the wart.
• Tape a piece of banana peel, inner side down, over the wart before you go to bed. A chemical in the peel can slowly dissolve the wart. Or, try the same with a piece of lemon peel. An oil in the peel seems to discourage warts.
• Papaya contains an enzyme that digests dead tissue. Make shallow cuts on the surface of an unripe papaya, collect the sap that runs out and let it coagulate. Mix the thickened sap with water, then apply morning and night.
• A popular folk remedy is to rub a juicy, freshly cut slice of raw potato over a wart.
• Crush a fresh basil leaf and tape it over your wart with waterproof first-aid tape (or even regular tape in a pinch). The leaves contain virus-killing compounds. Replace with fresh basil daily for up to a week.
• Several times a day, apply a tincture of goldenseal, an herb that contains compounds that fight off bacteria and viruses.
• Rub castor oil into your wart daily. The oil can make warts disappear, perhaps by keeping them moist so the skin cells in the wart just come apart.
• Vitamin E oil is also said to work against warts. Once a day, pierce a vitamin E capsule and rub the contents into the wart.
• If you have an aloe vera plant on the windowsill, break off a leaf and squeeze a few drops of gel onto the wart. Repeat daily.
• Plantar warts—painful warts on the bottom of your feet—are sensitive to heat and may disappear in a few weeks if you soak your feet in hot water (43˚C to 45˚C) for a about 15 minutes a day. This remedy was published in a medical journal in the 1960s. For an added kick, pour one part of vinegar into four parts hot water.
"*/

var title6="Bruises"
/*var content6="You’ve had a bump, blow, or knock to your body that was hard enough to damage small blood vessels under your skin. Blood leaks out of these blood vessels, called capillaries, and seeps into the surrounding tissue. For a while you see the traditional black-and-blue colors, which are the trademark of most bruises. As the pooled blood gradually breaks down, the colors take on a full palette of hues, from purple to green and yellow. Normally, bruises will fade away in 10 to 14 days without any treatment.
Though bruises eventually go away on their own, you can take steps to reduce the pain and encourage faster fading. First, reduce blood flow to the area with ice and compression to minimize discoloration. Next, use heat to boost circulation and help clear away the pooled blood. At the same time, as long as the skin isn’t broken, a number of herbal ointments and compresses can help erase the evidence of a klutzy moment that left its mark.
Speed the paling process
• Apply ice as soon as possible. If you cool the blood vessels around the bruised area, less blood will leak out into the surrounding tissue. Many flexible ice packs are available, specifically designed for injuries, and most rough-and-tumble athletes have the foresight to keep a couple of them in the freezer. If you’re not so equipped, soak a cloth in ice-cold water and lay it over the bruise for 10 minutes. Or use a bag of frozen vegetables wrapped in a towel. Take it off after 10 minutes, and wait 20 minutes or so before you reapply the ice pack so you don’t overchill the skin underneath.
• If you’ve bruised your arm or leg, immediately wrap an elastic bandage around the bruised part. By squeezing the tissues underneath, the bandage helps prevent blood vessels from leaking. The bruise won’t be quite as severe.
• Reduce blood flow to the bruise to minimize discoloration. If you bruise your leg, for instance, and you can take a time-out, settle into a couch or lounge chair with your leg up on a pillow, above heart level. If it’s your arm that’s bruised, try to keep it propped up above heart level whenever you’re sitting.
Turn up the heat
• After cooling the bruise for 24 hours, start applying heat to bring more circulation to the area and help clear away the pooled blood. Use an electric heating pad for 20 minutes several times a day. Be sure to follow the instructions on the heating pad: To avoid burns, it should go on top of—not under—the bruised limb.

• Alternatively, you can apply a warm compress either under or over the bruised area. A hot-water bottle will work. Or use a compress that can be heated in a microwave, such as Thera-Temp Microwavable Moist Heat Pack, available at medical supply stores and on Internet sites.

• A warm compress of comfrey can also offer comfort. Comfrey contains compounds that reduce swelling and promote the rapid growth of new cells. Make a warm herbal solution by pouring 2 cups of boiling water over 30 grams of dried comfrey leaves or 60 grams of fresh leaves. Steep for 10 minutes, then strain. This is for an external use only—it’s not for drinking. Soak a gauze pad or a washcloth in the solution and apply it to the bruise for an hour. (Off-limits...if the skin is broken or you have an open wound.) 

• Vinegar mixed with warm water will help the healing process. Vinegar increases blood flow near the skin’s surface, so it may help dissipate the blood that has pooled in the bruise area. Witch hazel will also do the trick.
Try a natural rub
• Arnica is an herb that has long been recommended for bruises. It contains a compound that reduces inflammation and swelling. Apply arnica ointment or gel to the bruise daily.

• Take a handful of fresh parsley leaves, crush them, and spread them over the bruise. Wrap the area with an elastic bandage. Some experts claim that parsley decreases inflammation, reduces pain, and can make the bruise fade more quickly. 

• Gently rub St. John’s wort oil into the bruise. Though St. John’s wort is often taken as a capsule or tea for mild depression, the oil has long been known as a wound healer. It’s rich in tannins, astringents that help shrink tissue and control capillary bleeding. For the best effect, start this treatment soon after the bruise occurs, and repeat it three times a day.
• Look for vitamin K cream in the drugstore. Your body needs vitamin K to help with blood clotting. Rub it into the bruise twice a day to prevent further bleeding.
Take dietary supplements
• Bromelain, an enzyme found in pineapples, actually “digests” proteins involved in causing inflammation and inducing pain. Take 250 to 500 milligrams of bromelain daily between meals until the bruise has faded.

• Use a homeopathic version of arnica. As soon as you get the bruise, start taking one dose every four hours. Take four doses the first day, then reduce your dosages to two or three pills daily as the bruise fades.
The power of prevention
• If you feel like you bruise too easily, you may be deficient in vitamin C. It strengthens capillary walls so they’re less likely to leak blood and make a bruise. Get additional vitamin C by eating more peppers and citrus fruit, and take a multivitamin.

• Increase your intake of flavonoids by eating more carrots, apricots, and citrus fruits. These help vitamin C work better in the body. Grape-seed extract is also a rich supplier of flavonoids. Take 20 to 50 milligrams daily.

• People who are susceptible to bruising may be deficient in vitamin K, which you can get from broccoli, Brussels sprouts, and leafy green vegetables, as well as from supplements.
Be selective about pain relievers
Don’t reach for the aspirin bottle when you’ve just gotten a bruise—it can make things worse. Aspirin thins the blood, which means it will more easily gather under the skin and make that bruise even more alarming. The same applies to ibuprofen (found in Advil and Motrin). If you think you’re getting too many bruises and you’re also taking aspirin regularly (to reduce your risk of heart attack, for example) talk to your doctor about the problem but don’t stop taking the aspirin on your own. For pain relief when you have a bruise, use acetaminophen, the ingredient found in Tylenol.
Should you see a doctor?
If your bruises appear mysteriously—that is, in places that you haven’t even injured—be sure to see your doctor. Sometimes bruises are the mark of serious conditions like hemophilia, leukemia, and aplastic anemia. Consult your doctor if you have a bruise at a joint and it leads to swelling, if a bruise doesn’t fade after a week, if it’s accompanied by severe pain or fever, or if you get a bruise on the side of your head over your ear (this area fractures easily).
"*/
var title7="Constipation"
/*var content7="If your first instinct when you’re constipated is to reach for the laxatives, chances are you don’t need one. The best way to get “regular” again is to eat more fibre, drink more fluids and exercise.
Fix it with fibre
Start off the day with a high-fibre bran cereal. Some brands contain as much as 14 grams of insoluble fibre, the kind that adds bulk to stool. If you’re new to the whole fibre thing, start off with a smaller serving to prevent gas, bloating and cramping.
Fill up on dried beans, prunes, figs, pears and oatmeal. These foods are also all high in soluble fibre.
Mix one to two teaspoons of psyllium seeds into a cup of hot water. Let it sit for two hours, add lemon and honey, then drink.
Flaxseeds are high in fibre and also contain heart-healthy omega-3 fats. Take one tablespoon of the ground seeds two or three times a day. You can also add it your morning cereal or smoothie.
As you increase your intake of fibre be sure to drink lots of water—at least 8 glasses a day.
Loosen up with a hot cup
A morning cup of hot java will help. Caffeine has a bowel-loosening effect. Just don’t drink too much since it’s also a diuretic.
Herbal or decaffeinated tea, or a simple cup of hot water with lemon juice will also help to get things moving.
Dandelion tea has a mildly laxative effect. Steep one teaspoon of the dried root in one cup of boiling water. Drink one cup three times per day.
Tastes awful but it works
Castor oil has a compound that when digested stimulates the small and large intestines. Swallow one to two teaspoons quickly on an empty stomach and give it eight hours to work its magic. Tastes nasty but it works!
Wrinkled fruit to the rescue
Prunes are one of the oldest home remedies for constipation. High in fibre, prunes also contain a compound called dihydroxyphenyl isatin, which kicks the colon into action.
Raisins are also high in fibre as well as tartaric acid, which has a laxative effect.
Get up and go
There’s a reason the evening walk used to be called the daily constitutional. Regular exercise helps your body move food quicker. Aim for a daily walk at the very least.
Put the pressure on
You can stimulate your digestive system through acupressure. Using your thumb, apply pressure at the spot four finger-widths above your wrist on the back of the forearm. Do this two minutes per day.
Last resort
The herb cascara sagrada is one of the key ingredients in over-the-counter laxatives. It comes in a variety of forms (teas, tinctures,tablets) and it’s important to follow the directions on the package carefully. Don’t use it for more than two weeks since it can cause you to lose too much fluid and salt.
Senna is the mother of all laxatives. A tincture is the easiest way to take his herb. Usually 20 to 40 drops at bedtime is sufficient.
Go easy with both of these herbs since long-term use can cause dependency.
Relax and don’t wait
Never force a bowel movement. You can give yourself hemorrhoids or anal fissures that eventually narrow the anal opening, causing constipation.
Never ignore nature’s call. If you do, you’re asking for a case of constipation.
"*/
var title8="Oily skin";
/*var content8="If you have oily skin, your sebaceous glands are pumping out an overabundance of sebum, the waxy substance that protects your skin. When there’s too much, skin looks oily, and that overabundance of sebum may contribute to acne. Heredity plays a part: For instance, people with dark hair make more oil than fair-haired folks. But there are other contributing factors, including stress and changes in hormone activity. Pregnant women and those taking oral contraceptives are more likely to have problems with oily skin.

Look on the bright side: Oily skin tends to age better and develop fewer wrinkles than dry or normal skin. But it does require more attention, since you need to keep cleansing those overproductive pores. The key is a firm but gentle hand. You want to wash away dead skin cells, dirt, and excess oil without scrubbing so hard that you cause irritation. (Ironically, if you overdo the scrubbing, your skin produces even more oil.)
Washing Well
• Wash your face with hot water. It dissolves oil more effectively than cool or lukewarm water. 

• Choose the right cleanser. Whether you prefer bar soap or liquid cleansers, avoid products, like Dove, that have added moisturizers. Bar soaps like Ivory, Dial, or Lever 2000 are perfectly effective, though you can also use cleansers formulated specifically for oily skin (they’re likely to be more expensive). 

• If you’re having acne outbreaks, choose an antibacterial soap formulated with benzoyl peroxide or triclosan. These discourage growth of acne-causing bacteria. 

• Use a liquid face wash that contains alpha-hydroxy acids (AHAs), such as citric acid, lactic acid, or glycolic acid. The AHAs work in several ways, helping to slough off dead skin cells, reduce the oil in your pores, and combat infection.
Make Your Own Toner
• After you’ve washed your face, soak a cotton pad in distilled witch hazel and dab it all around. Use it twice a day for two to three weeks. After the third week, apply it once a day. Witch hazel contains tannins, which have an astringent effect, making the pores tighten up as they dry. 

• The herbs yarrow, sage, and peppermint also have astringent properties. To make a homemade skin toner that will improve the look and feel of oily skin, put a tablespoon of one of these herbs in a cup, then fill to the top with boiling water. Let steep for 30 minutes. Strain the liquid and let it cool before you dab it on your face. Whatever’s left over can be stored in a squeeze bottle. It will stay fresh for three days at room temperature, or five days if you keep it in the refrigerator. 

• Hyssop, a member of the mint family, also makes an excellent herbal toner. In folk medicine it’s considered good for the complexion. Add 1 tablespoon hyssop to 1 cup water. Boil for ten minutes, then strain. Let the mixture cool. After cleansing your skin, apply the toner with a cotton ball. 

• A combination of lavender and neroli essential oil (derived from orange blossoms) acts as a skin cleanser and toner. Pour some lavender floral water in a hand sprayer, and add a drop of neroli oil. Spray the mixture on your skin several times a day.
Give Your Face a Massage
• A fine-grain powder can help absorb oil and get rid of dead skin cells that clog pores. Grind and sift 2 teaspoons of dry oats, then moisten with some witch hazel to form a paste. Using your fingertips, massage this paste gently into your skin, then rinse it away with warm water. 

• Several times a week, massage your face with buttermilk after washing it. The active cultures in buttermilk contain acids that help to clean away dirt and tighten pores. Leave it on for a few minutes, then rinse.
Use a Grease-Cutting Facial Mask
• Clay masks or mud masks reduce greasiness and help tone your skin and draw out impurities. The masks are available at most drugstores. Or you can make your own using facial clay (like bentonite, available at natural foods stores and on the Internet) and witch hazel. Don’t use pottery clay; it won’t have the same effect. Add 1 tablespoon witch hazel to 1 teaspoon facial clay, and stir until they’re blended. If you like, add 2 drops cypress oil and 2 drops lemon oil for fragrance and to help control overactive oil glands. Sit back, relax, leave the mask on for 10 minutes or until the clay is dry, then rinse it off. 

• Egg-white masks are said to firm the skin and soak up oil. Mix one teaspoon of honey with an egg white and stir well. Then add just enough flour to make a paste. Apply the mask to your face, avoiding the eye area. (Be careful not to ingest any of the egg mixture.) Let it dry for about ten minutes, then wash it off with warm water.

• Some Indonesian women use mango to make a face mask to dry and tone the skin. To make the mask, mash a mango until it turns into soft pulp, massage it into your skin, leave it on to dry for a few minutes, then rinse off. It is said to help unclog the pores. 

• Lemon juice is used in another grease-cutting mask, along with astringent herbs and a chopped apple as the base. Place the apple in a pot, add water to cover, then simmer until it’s soft. Mash the apple, add 1 teaspoon lemon juice, then 1 teaspoon of either dried sage, lavender, or peppermint. Apply this mixture to your face, leave it on for 5 minutes, then rinse with warm water.
Take the Shine Off
• Throughout the day, powder your face with loose face powder, which will blot up excess oil. Don’t use pressed powder—it contains oil and it may foster blemishes or make existing acne worse. 

• Clinac OC is a cream that can be used several times a day to absorb oil. You can buy it as an over-the-counter medicine at the pharmacy, as well as on the Internet.

• Look for foil-wrapped packets of alcohol-saturated wipes for oily skin. You’ll find them in the skin-care section of the drugstore. Keep some in your handbag or briefcase, so they’re handy when you need them. The alcohol cuts through the oil to temporarily de-shine your face.
The Power of Prevention
• Take 1 tablespoon of flaxseed oil a day. While it may sound kooky to add oil to your diet, there’s good rationale. Flaxseed is high in essential fatty acids, which have been shown to help improve many skin conditions, including oily skin. You’ll find flaxseed oil in health-food stores. To protect it from light and heat, buy the cold-pressed oil in an opaque container and store it in your refrigerator.
"*/
var key= {
		content : "general"
	}

db.Keyword.create(key, function (error, keyw){
		if(error){
			console.log("error :", error);
		}
		console.log("the keyword created successfully", keyw);
		db.Advice.create({title:title1,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/aloe-vera.jpg',
			link:"http://www.besthealthmag.ca/best-you/home-remedies/aloe-vera-health-benefits-and-uses"}, 
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);

		});

		db.Advice.create({title:title2,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/ChoosingRightShoes2_18.jpg',
			link:"http://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-calluses-and-corns"}, 
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title3,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/SoreThroat(remedy)-7_18.jpg',
			link:"http://www.besthealthmag.ca/sorethroat"}, 
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title4,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/salmon_0.jpg', 
			link:"http://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-palpitations" },
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title5,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/dandelions.jpg',
			link:"http://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-warts" },
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title6,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/elbow-bruise.jpg', 
			link:"http://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-bruises"},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title7,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/constipation_268_7.jpg', 
			link:"http://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-constipation" },
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title8,
			content:"",
			keywords:[],
			img:'http://www.besthealthmag.ca/sites/default/files/images/oilyskin.jpg', 
			link:"http://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-oily-skin" },
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;