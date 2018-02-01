import codecs

fileData = './raw/charData.txt'
fileDataLs = './raw/chars.ls'

with codecs.open(fileData,'r',encoding='utf8') as f:
    data = f.read()

file = codecs.open(fileDataLs,'w',encoding='utf8')
front = '''# ============================================================================
# Column settings
# ============================================================================
# name:		name of this character
# class:	class of this character
# rarity:	rarity of this character
# plain:	plain type of this character
# hpF:		HP increase factor
# atF:		ATK increase factor
# dfF:		DEF increase factor
# totF:		total increase factor
# ============================================================================

char = {
	slotChar: <[name weapon rarity plain hpF atF dfF totF]>
	data:[\n'''
#print(front)
file.write(front)

for line in data.splitlines():
    line = line.strip()
    #print("\t\t<[" + line + "]>\n")
    file.write("\t\t<[" + line + "]>\n")
    
back = '''		]
}
module.exports = char'''
#print(back)
file.write(back)
file.close()
print("chars.ls generated complete!")