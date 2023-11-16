import styles from "./index.module.scss";
import { useState } from "react";
import Container from "src/components/Container";
import { useNavigate } from "react-router-dom";
import PhoneInput from "src/components/BaseInputs/PhoneInput";
import "react-phone-input-2/lib/style.css";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import useQueryString from "src/hooks/useQueryString";
import Button from "src/components/Button";

// console.log(search);
const OrderCreator = () => {
  const { search } = useLocation();
  // const { number } = queryString.parse(search);
  const [phone, $phone] = useState<string>();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/ordercreator/orderdetails?phone=${phone}`);
  };
  // console.log(phone);
  return (
    <div>
      <div className={styles.title}>Создать заказ </div>
      <Container>
        <div className={styles.user__block}>
          <div className={styles.user}>
            <p className={styles.receiver}>Получатель</p>
            <div className={styles.number}>
              <div className={styles.country__code}>
                <PhoneInput
                  className={styles.selector}
                  placeholder="+998 97 123 45 67"
                  // value={this.state.phone}
                  onChange={(value: string) => $phone(value)}
                />
              </div>
            </div>
            <Button
              text="Создать"
              className={styles.button__create}
              onClick={handleNavigate}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderCreator;
