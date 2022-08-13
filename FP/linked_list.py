class Node:
    def __init__(self , data):
        self.data = data
        self.next = next
class Linkedlist:
    def __init__ (self):
        self.head = None
        self.last_node = None
    def append(self , data):
        if self.last_node is None:
            self.head = Node(data)
            self.last_node = self.head
        else:
            self.last_node.next = Node(data)
            self.last_node = self.last_node.next
    def display(self):
        curr = self.head
        while curr is not None:
            print(curr.data, end = " ")
            curr = curr.next
my_list = Linkedlist( )
a = int(input('how many elements would you like to add?\n'))
for i in range(a):
    data = int(input('enter data item\n'))
    my_list.append(data)
print('the linked list: ', end = " ")
my_list.display( )