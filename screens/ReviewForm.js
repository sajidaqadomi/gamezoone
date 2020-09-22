import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'; // for everything
import FlatButton from '../shared/FlatButton';

let schema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is rating(1-5)', 'rating must be a number from (1-5)', (val) => {
        return (parseInt(val) < 6 && parseInt(val) > 0)
    })
})
const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    addReview(values)
                    actions.resetForm()
                    // console.log(values, 'fff')

                }

                }>

                {
                    (props) => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='Review body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Rating(1-5)'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                keyboardType='numeric'
                                onBlur={props.handleBlur('rating')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                            {/* <Button title="SUBMIT" color='maroon' onPress={() => props.handleSubmit()} /> */
                            }
                            <FlatButton text='Submit' onPress={props.handleSubmit} />
                        </View>
                    )
                }

            </Formik>
        </View>
    )
}

export default ReviewForm

const styles = StyleSheet.create({})
