# ITIS 6177 Final Project
### by Jay Dave

This is the final project assignment for ITIS 6177 that was to create an API using [Azure Text Analytics](https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/)

## Sentiment Analysis
Use this to find out what people think of your brand/topic by mining the text for clues about positive or negative sentiment.

**Sample Sentiment Analysis Input**
```
["I had the best day of my life. I wish you were there with me."]
```

## Language Detection
Use this to detect the language that is inputted 

**Sample Language Detection Input**
```
["Ce document est rédigé en Français."]
```

## Name Entity Recognition (NER)
Use this to identify and categorize entities in the input such as people, places, organizations, etc.

**Sample NER Input**
```
["I had a wonderful trip to Seattle last week."]
```

### NER Entity Linking
Use this to identify entities and link them to each other

**Sample NER Entity Linking Input**
```
["Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. During his career at Microsoft, Gates held the positions of chairman, chief executive officer, president and chief software architect, while also being the largest individual shareholder until May 2014."]
```

### NER Personally Identifiable Information (PII)
Use this to output identifiable information from the entity

**Sample NER PII Input**
```
["A developer with SSN 859-98-0987 whose phone number is 800-102-1100 is building tools with our APIs."]
```

## Key Phrase Extraction
Use this to quickly extract and identify the main concepts in the text

**Sample Key Phrase Extraction Input**
```
["My cat might need to see a veterinarian."]
```
