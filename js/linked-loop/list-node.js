/**
 * Representation of a linked loop vertex (i.e. node) having various  
 * edges, two of which enforce an ordering on the nodes, i.e. 'prev'
 * and 'next'.
 *  
 * @constructor
 * @param {*} item - The actual item stored at a node.
 * @param {ListNode} prev - The previous item.
 * @param {ListNode} next - The next item.
 */
function ListNode(
		item, prev, next) {
	
	this.item = item;
	this.prev = prev;	
	this.next = next;
}


/**
 * Advances the node by the given number of steps.
 * 
 * NOTE: This is slow ( O(n) ); use in debugging code only.
 */
ListNode.advanceNSteps = function(node, n) {
	for (let i=0; i<n; i++) {
		node = node.next;
	}
	
	return node;
}


module.exports = ListNode;




