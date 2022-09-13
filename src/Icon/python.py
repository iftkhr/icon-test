fh = open("Icon/flist.txt", "r")



a = []
for line in fh:
    if line.startswith("import") is False:
        a.append("<" + line[:-5] + " tooltip='' stroke='' fill='' height='' width='' / >" + "\n")


#     a.append("import {" + line[:-5] + "} from '../Icon/" + line[:-1] + "'\n")

fh1 = open("Icon/flist.txt", "a")

for item in a:
    fh1.write(item)
