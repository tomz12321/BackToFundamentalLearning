#
#The noise-contrastive estimation loss is defined in terms of a logistic regression model. 
#For this, we need to define the weights and biases for each word in the vocabulary 
#(also called the output weights as opposed to the input embeddings). So let's define that.

nce_weights = tf.Variable(
  tf.truncated_normal([vocabulary_size, embedding_size],
                      stddev=1.0 / math.sqrt(embedding_size)))
nce_biases = tf.Variable(tf.zeros([vocabulary_size]))