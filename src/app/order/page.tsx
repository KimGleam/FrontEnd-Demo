'use client';

import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from '@mui/material';

const CheckoutPage = () => {
    const [buyerInfo] = useState({
        이름: 'John Doe',
        이메일: 'johndoe@example.com',
        휴대폰번호: '010-0000-0000',
    });

    const [recipientInfo, setRecipientInfo] = useState({
        이름: 'John Doe',
        배송주소: '서울특별시',
        연락처: '010-0000-0000',
        배송요청사항: '문 앞',
    });

    const [productInfo] = useState({
        상품명: 'Product A',
        가격: 50,
        수량: 1,
    });

    const [paymentInfo, setPaymentInfo] = useState({
        총상품가격: 50,
        할인쿠폰: '',
        배송비: 5,
        총결제금액: 55,
        결제방법: '',
    });

    const [loading, setLoading] = useState(false);

    const handleRecipientInfoChange = (event) => {
        const { name, value } = event.target;
        setRecipientInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handlePaymentInfoChange = (event) => {
        setPaymentInfo({
            ...paymentInfo,
            할인쿠폰: event.target.value,
        });
    };

    const handleAddressChange = () => {
        // Implement logic to change delivery address
        alert('배송지가 변경되었습니다.');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate loading
        setLoading(true);
        // Simulate payment process
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Reset form and loading state after payment process
        setLoading(false);
        setRecipientInfo({ 이름: '', 배송주소: '', 연락처: '', 배송요청사항: '' });
        setPaymentInfo({ ...paymentInfo, 할인쿠폰: '' });
        alert('결제가 완료되었습니다! 주문해주셔서 감사합니다.');
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                주문 및 결제
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            구매자 정보
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    {Object.entries(buyerInfo).map(([fieldName, value]) => (
                                        <TableRow key={fieldName}>
                                            <TableCell>{fieldName}</TableCell>
                                            <TableCell>{value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            받는 사람 정보
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    {Object.entries(recipientInfo).map(([fieldName, value]) => (
                                        <TableRow key={fieldName}>
                                            <TableCell>{fieldName}</TableCell>
                                            <TableCell>{value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button onClick={handleAddressChange} variant="outlined" style={{ marginTop: '20px' }}>
                            배송지 변경
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            배송 품목
                        </Typography>
                        <Typography variant="body1">상품 이름: {productInfo.상품명}</Typography>
                        <Typography variant="body1">가격: ${productInfo.가격}</Typography>
                        <Typography variant="body1">수량: {productInfo.수량}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            결제 정보
                        </Typography>
                        <Typography variant="body1">총 상품 가격: ${paymentInfo.총상품가격}</Typography>
                        <FormControl fullWidth style={{ marginTop: '8px' }}>
                            <InputLabel>할인 쿠폰</InputLabel>
                            <Select
                                value={paymentInfo.할인쿠폰}
                                onChange={handlePaymentInfoChange}
                            >
                                <MenuItem value="">선택 안 함</MenuItem>
                                <MenuItem value="coupon1">쿠폰 1</MenuItem>
                                <MenuItem value="coupon2">쿠폰 2</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography variant="body1">배송비: ${paymentInfo.배송비}</Typography>
                        <Typography variant="body1">총 결제 금액: ${paymentInfo.총결제금액}</Typography>
                        <FormControl fullWidth style={{ marginTop: '8px' }}>
                            <InputLabel>결제 방법</InputLabel>
                            <Select
                                value={paymentInfo.결제방법}
                                onChange={(e) => setPaymentInfo({ ...paymentInfo, 결제방법: e.target.value })}
                            >
                                <MenuItem value="creditCard">신용카드</MenuItem>
                                <MenuItem value="bankTransfer">계좌 이체</MenuItem>
                                <MenuItem value="paypal">페이팔</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSubmit}
                            disabled={loading}
                            style={{ marginTop: '16px' }}
                        >
                            {loading ? '결제 중...' : '결제하기'}
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CheckoutPage;
