from app.models import db, Plant


def seed_plants():
    plants = [
        Plant(
            name='Xerographica', description='''This air plant grows naturally in Guatemala, Mexico, and El Salvador. 
            They are very sturdy and can produce flowers ranging from red to chatreuse to purple. 
            The leaves are evergreen, gray, or white.''', 
            imgURL='''https://images.unsplash.com/photo-1608624687631-f5cde41166ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80''',
            care='Water weekly, less often than most other air plants.', light='average', size='large', difficulty=1,
            variety='Air Plant', userId=1
        ),
        Plant(
            name='Tillandsia', description='''Perennial air plants that are native to northern Mexico and the south-eastern 
            United States.''', imgURL='https://images.unsplash.com/photo-1602149316890-b3c218504e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
            care='Water weekly. They are highly sensitive to frost.', light='average', size='medium', difficulty=1,
            variety='Air Plant', userId=1
        ),
        Plant(
            name='Makoyana', description='''The Calathea Makoyana, commonly known as the peacock plant, 
                                        has long wavy green leaves with a pattern of deep green brushstrokes on top 
                                        and a deep purple underside. It can grow up to two feet tall if cared for correctly.''', 
            imgURL='https://images.unsplash.com/photo-1597306200021-f8e16b12fb45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            care='Water every other week. Needs excellent drainage in pots', light='low', size='medium', difficulty=1,
            variety='Calathea', userId=1
        ),
        Plant(
            name='Rattlesnake', description='''
                                The Calathea Rattlesnake has long wavy green leaves with a pattern of 
                                deep green brushstrokes on top, resembling reptile skin, and a deep purple underside.''',
            imgURL='https://images.unsplash.com/photo-1580018550304-def91943abdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
            care='Water every other week. Needs excellent drainage in pots', light='low', size='medium', difficulty=2,
            variety='Calathea', userId=1
        ),
        Plant(
            name="Bird's Nest Fern", description='''Known for its tropical fronds that grow out of a central rosette, 
            this plant will add vibrant pop of green to any space all year long. 
            It is one of the easiest ferns to care for indoors.''', 
            imgURL='https://images.unsplash.com/photo-1603264794427-300d0340e634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80',
            care='Water every other week.', light='low', size='medium', difficulty=1,
            variety='Fern', userId=1
        ),
        Plant(
            name='Kangaroo Fern', description='''The Kangaroo Fern is native to Australia. This fern is an epiphyte, meaning it 
            grows on trees in nature. It likes moist and humid conditions, 
            but will tolerate drying out every once in a while. 
            It is very forgiving, making it a great houseplant for beginners.''', 
            imgURL='https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_kangaroo-fern_slate.jpg?ver=279232',
            care='Water every other week.', light='low', size='medium', difficulty=1,
            variety='Fern', userId=1
        ),
        Plant(
            name='Ficus lyrata', description='''Ficus lyrata is a broadleaf evergreen tree native to the tropical region 
            of western Africa. In its natural habitat Ficus lyrata can attain heights of 40 - 50 feet, with a spread of 30 
            feet and a trunk that grows several feet thick.''', 
            imgURL='https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            care='Water every week at first. Once the plant has adjusted to your home it can be every other week.', light='high', size='large', difficulty=5,
            variety='Fiddle Leaf Fig', userId=1
        ),
        Plant(
            name='Suncoast', description='''This plant will flourish in the right conditions. 
            This tall, dramatic plant has very large, heavily veined, violin-shaped leaves that grow upright. 
            It’s not bushy, making it a beautiful interior design addition for a brightly lit corner or cozy nook in your home.
            ''', 
            imgURL='https://images.unsplash.com/photo-1592829848755-55d2f17574d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            care='DO not move this plant around, keep it in one place with a consistent temperature.', light='high', size='large', difficulty=5,
            variety='Fiddle Leaf Fig', userId=1
        ),
        Plant(
            name='Dahlia Dalaya Fireball', description='''Red and Yellow Dahlia. With fiery blooms, 
            Dahlia Dalaya Fireball has striking red, orange, and yellow flowers. 
            Perfect for a sunny spot on your porch or patio''', 
            imgURL='https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_red-dahlias-accent_medium_stone_crop.jpg?ver=538493',
            care='Water one to two times a week. Keep the foliage as dry as possible.', light='high', size='medium', 
            difficulty=4, variety='Flowers', userId=1
        ),
        Plant(
            name='Petunia Headliner Night Sky', description='''
            Featuring brilliantly colored blooms, Petunia Headliner Night Sky has eye-catching purple and white blossoms.
            Purple Petunias are early to flower in the spring, producing blooms in abundance throughout the season. 
            Heat and drought-tolerant with vibrant flowers, Purple Petunias are perfect for sunny patios and balconies.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_petunia-night-sky-accent_medium_clay_crop.jpg?ver=538492',
            care='Water every few days.', light='high', size='medium', difficulty=3,
            variety='Flowers', userId=1
        ),
        Plant(
            name='Money Tree Forest', description='''A unique take on the classic Money Tree, the Money Tree Forest
            features multiple stems to give the appearance of a forest of plants in one pot. 
            These plants sport bright green star-shaped leaves to look like both a tree and a palm.''', 
            imgURL='https://bloomscape.com/wp-content/uploads/2020/10/bloomscape_money-tree-forest_indigo.jpg?ver=313687',
            care='Water every week.', light='low', size='medium', difficulty=1,
            variety='Money Tree', userId=1
        ),
        Plant(
            name='Mini Money Tree', description='''
            A lively, pet-friendly plant topped with palmate leaves upon a stout trunk. A mini-version of the beloved braided Money Tree.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_mini-money-tree_charcoal_0621-scaled.jpg?ver=542511',
            care='Water every week.', light='low', size='small', difficulty=1,
            variety='Money Tree', userId=1
        ),
        Plant(
            name='Monstera Deliciosa', description='''
            Nicknamed the “swiss cheese plant”, the Monstera deliciosa is famous for its quirky natural leaf holes. 
            These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity 
            of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.
            ''', imgURL='https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            care='Water every other week. Do not overwater.', light='average', size='medium', difficulty=3,
            variety='Monstera', userId=1
        ),
        Plant(
            name='Monstera Adansonii', description='''        
            Monsteras are famous for their quirky natural leaf holes. These holes are theorized to maximize sun 
            fleck capture on the forest floor. A cousin of the Monstera deliciosa, the leaves of the Monstera adansonii, 
            or “Adanson's monstera”, are slightly smaller and their holes more pronounced and lives to climb as it grows 
            and matures.
            ''', imgURL='https://images.unsplash.com/photo-1598952052832-91f88ace8887?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            care='Water every other week', light='average', size='small', difficulty=2,
            variety='Monstera', userId=1
        ),
        Plant(
            name='Date Palm', description='''
            Date Palm, also known as the Robellini Palm, is an easy-going and adaptable Palm that features 
            dramatic fanning fronds. This Palm is tolerant to many conditions, making it a great option for both 
            indoors and on patios during warm months.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2020/12/bloomscape_date-palm_stone-resize.jpg?ver=372946',
            care='Water when the top half of the soil is dry.', light='average', size='large', difficulty=1,
            variety='Palm', userId=1
        ),
        Plant(
            name='Parlor Palm', description='''
            The Parlor Palm is a favorite easy-care palm with tropical fronds known for its air purifying qualities.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_parlor-palmloomscape_slate.jpg?ver=279264',
            care='Water when the top half of the soil is dry.', light='average', size='medium', difficulty=1,
            variety='Palm', userId=1
        ),
        Plant(
            name='Peperomia Ginny', description='''
            Easy to care for and almost succulent-like, Peperomia Ginny has light green leaves edged with hues of yellow and pink. 
            The Peperomia Ginny is adaptable, incredibly low-maintenance, and grows compactly.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_peperomia-ginny_slate_0621-scaled.jpg?ver=542520',
            care='Water regularly, alternate between watering and misting.', light='high', size='small', difficulty=2,
            variety='Peperomia', userId=1
        ),
        Plant(
            name='Peperomia Watermelon', description='''
            This plant grows as a ground cover in South American rainforests. The Peperomia Watermelon is a perfect indoor 
            houseplant gift and will make a great impact without taking up space in your home.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_peperomia-watermelon_slate_0621-scaled.jpg?ver=542526',
            care='Water regularly, alternate between watering and misting.', light='high', size='small', difficulty=5,
            variety='Peperomia', userId=1
        ),
        Plant(
            name='Shangri La', description='''A new cultivar of the popular Philodendron Hope Selloum, 
            the Philodendron Shangri La has heart-shaped leaves with deep, wavy incisions along the edges.''', 
            imgURL='A new cultivar of the popular Philodendron Hope Selloum, the Philodendron Shangri La has heart-shaped leaves with deep, wavy incisions along the edges.',
            care='This tropical plant prefers a bit of humidity and will benefit from regular misting or the use of a humidifier.', light='high', size='small', difficulty=1,
            variety='Philodendron', userId=1
        ),
        Plant(
            name='Brasil', description='''
            The Philodendron Brasil is a fast-growing, easy, vining plant. 
            Its graceful, heart-shaped leaves are dark green with yellow variegation in the center of the leaf. 
            This full, trailing plant is perfect on top of bookshelves or in a plant hanger where its vines can ‘spill’ out.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_philodendron-brasil_alt_charcoal.jpg?ver=279272',
            care='Higher humidity encourages larger leaves. Water regularly.', light='average', size='medium', difficulty=1,
            variety='Philodendron', userId=1
        ),
        Plant(
            name='Marble Queen Pothos', description='''
            Sporting bright green glossy leaves painted with white, the Marble Queen Pothos is known for being a low-maintenance and durable plant. 
            When placed in a bright, well-lit area, this Pothos will grow brilliantly contrasting white and green leaves, 
            but it can also tolerate lower light environments with less distinctive patterning.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2021/05/bloomscape_marble-queen-pothos_stone-scaled.jpg?ver=519323',
            care='Water weekly. The leaves will brown if the air is too dry.', light='average', size='medium', difficulty=2,
            variety='Pothos', userId=1
        ),
        Plant(
            name='Silver Pothos', description='''
            This striking tropical plant is a fairly new variety—loved for its full growth and unusual coloring. 
            It grows fuller and is less vining than other Pothos, and cascades splendidly in a hanging planter 
            or on a shelf where there is room for it to spread.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_silver-satin-pothos_alt-3_slate_0621-scaled.jpg?ver=542562',
            care='Slightly more humid environment is good for this Pothos. Look out for yellow leaves, they are a symptom of too much water.', light='high', size='small', difficulty=3,
            variety='Pothos', userId=1
        ),
        Plant(
            name='Sansevieria Sayuri', description='''
            NASA research has shown that Sansevieria purify and clean indoor areas by removing toxins such as formaldehyde and benzene. 
            Since they produce oxygen mainly at night, Sansevieria make excellent bedroom companions.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2020/12/bloomscape_sansevieria-sayuri_stone-resize.jpg?ver=372959',
            care='Water only when the soil is completely dry.', light='high', size='large', difficulty=1,
            variety='Snake Plant', userId=1
        ),
        Plant(
            name='Sansevieria', description='''
            Sansevierias have stiff, upright, sword-like leaves. Its architectural nature makes it a natural choice for modern and contemporary interior designs.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2020/12/bloomscape_sansevieria_stone-resize.jpg?ver=372956',
            care='Water only when the soil is completely dry.', light='high', size='large', difficulty=1,
            variety='Snake Plant', userId=1
        ),
        Plant(
            name='String of Pearls', description='''
            String of Pearls does not require any extra humidity and can handle dry air. It is considered moderately toxic, 
            causing mouth irritation and stomach indigestion to humans and pets if ingested.
            ''', imgURL='https://images.unsplash.com/photo-1595313356207-52d15f1a35be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            care='Water only when soil is dried out.', light='high', size='small', difficulty=3,
            variety='Succulent', userId=1
        ),
        Plant(
            name='String of Bananas', description='''
            String of Bananas, or Curio radicans, formerly known as Senecio radicans, 
            is a trailing succulent native to South Africa that bares banana shaped leaves. 
            The translucent lines on the sides of the leaves are known as epidermal windows to 
            increase the area available for light absorption.
            ''', imgURL='https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_string-of-succulents_collection_collection_string-of-bananas.jpg?ver=278914',
            care='Water only when soil is dried out.', light='high', size='small', difficulty=3,
            variety='Succulent', userId=1
        )
    ]

    for plant in plants:
        db.session.add(plant)
    
    db.session.commit()


def undo_plants():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()