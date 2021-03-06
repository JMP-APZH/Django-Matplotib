import matplotlib.pyplot as plt
import base64
from io import BytesIO


def get_graph():
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_png = buffer.getvalue()
    #print(image_png)
    graph = base64.b64encode(image_png)
    #print(graph)
    graph = graph.decode('utf-8')
    #print(graph)
    buffer.close()
    return graph

def get_plot(x,y):
    # ... code related to matplotlib
    #step1 - switching the backend:
    plt.switch_backend('AGG')
    #step2 - set size of our figures:
    plt.figure(figsize=(8,5))
    
    plt.title('sales of items')
    plt.plot(x,y)

    #step3 - change the rotation of the items:
    plt.xticks(rotation=45)

    plt.xlabel('item')
    plt.ylabel('price')
    plt.tight_layout()
    graph = get_graph()
    return graph